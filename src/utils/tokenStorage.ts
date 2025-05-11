import * as Keychain from 'react-native-keychain';

interface Token {
  accessToken: string;
  refreshToken: string;
}

class TokenStorage {
  private static instance: TokenStorage;
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
    } catch (e) {
      throw new Error('Failed to store the token');
    }
  }

  async getTokens(): Promise<Token> {
    const credentials = await Keychain.getGenericPassword({
      service: this.serviceName,
    });
    if (credentials) {
      try {
        console.log('cre ==>', credentials);
        return JSON.parse(credentials.password);
      } catch (e) {
        console.warn(e);
        throw new Error('Failed to parse stored token');
      }
    }
    throw new Error('Failed to get the token');
  }

  async clearTokens() {
    await Keychain.resetGenericPassword({service: this.serviceName});
  }
}

export const tokenStorage = TokenStorage.getInstance();
