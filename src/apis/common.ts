interface ApiOptions {
  url: string;
  headers?: HeadersInit_;
  body?: BodyInit_;
  param?: object;
}

interface ApiParam {
  get: <T>(option: ApiOptions) => Promise<T>;
  post: <T = void>(option: ApiOptions) => Promise<T>;
  put: <T = void>(option: ApiOptions) => Promise<T>;
  delete: <T = void>(option: ApiOptions) => Promise<T>;
}

const getHeaders = (extraHeaders: object) => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', 'Bearer ');
  Object.entries(extraHeaders).forEach(([key, value]) => {
    headers.set(key, value);
  });
  return headers;
};

const connectQueryParam = (param: object) => {
  const validParam = Object.entries(param).filter(([_, value]) => {
    return value !== undefined;
  });

  if (validParam.length === 0) {
    return '';
  }

  const queryParam = validParam
    .map(([key, value]) => {
      return `${key}=${value}`;
    })
    .join('&');
  return `?${queryParam}`;
};

class Api implements ApiParam {
  async get<T>(option: ApiOptions): Promise<T> {
    const {url, param = {}, body = {}, headers = {}} = option;
    const apiUrl = `${url}${connectQueryParam(param)}`;
    await fetch(apiUrl, {
      headers: getHeaders(headers),
      body: JSON.stringify(body),
    });
    return {} as T;
  }
  async post<T = void>(option: ApiOptions): Promise<T> {
    const {url, body = {}, headers = {}} = option;
    await fetch(url, {
      headers: getHeaders(headers),
      body: JSON.stringify(body),
    });
    return {} as T;
  }
  async put<T = void>(option: ApiOptions): Promise<T> {
    const {url, body = {}, headers = {}} = option;
    await fetch(url, {
      headers: getHeaders(headers),
      body: JSON.stringify(body),
    });
    return {} as T;
  }
  async delete<T = void>(option: ApiOptions): Promise<T> {
    const {url, body = {}, headers = {}} = option;
    await fetch(url, {
      headers: getHeaders(headers),
      body: JSON.stringify(body),
    });
    return {} as T;
  }
}

export const api = new Api();
