import * as Keychain from 'react-native-keychain';

interface Token {
  accessToken: string;
  refreshToken: string;
}

class TokenStorage {
  private static instance: TokenStorage;
  private cachedKey: Token | undefined;
  private serviceName = 'ptpt';

  private constructor() {}

  public static getInstance(): TokenStorage {
    if (!TokenStorage.instance) {
      TokenStorage.instance = new TokenStorage();
    }
    return TokenStorage.instance;
  }

  async setTokens(tokens: Token) {
    const tokenString = JSON.stringify(tokens);
    try {
      await Keychain.setGenericPassword('token', tokenString, {
        service: this.serviceName,
        accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
      });
      this.cachedKey = tokens;
    } catch (e) {
      throw new Error('Failed to store the token');
    }
  }

  async getTokens(): Promise<Token | undefined> {
    if (this.cachedKey) {
      return this.cachedKey;
    }
    const credentials = await Keychain.getGenericPassword({
      service: this.serviceName,
    });
    if (credentials) {
      try {
        const token = JSON.parse(credentials.password);
        this.cachedKey = token;
        return this.cachedKey;
      } catch (e) {
        console.warn(e);
        throw new Error('Failed to parse stored token');
      }
    }
  }

  async clearTokens() {
    this.cachedKey = undefined;
    await Keychain.resetGenericPassword({service: this.serviceName});
  }
}

export const tokenStorage = TokenStorage.getInstance();
