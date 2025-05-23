import {SweetError} from './error';
import {tokenStorage} from '@/utils/tokenStorage';
import {fetchToCurl} from '@/utils/request';

interface ApiOptions {
  url: string;
  headers?: object;
  body?: object;
  param?: object;
  isMultipart?: boolean;
}

interface ApiParam {
  get: <T>(option: ApiOptions) => Promise<T>;
  post: <T = void>(option: ApiOptions) => Promise<T>;
  put: <T = void>(option: ApiOptions) => Promise<T>;
  delete: <T = void>(option: ApiOptions) => Promise<T>;
}

const getAuthHeader = async () => {
  const header: Record<string, string> = {};
  const token = await tokenStorage.getTokens();
  if (token) {
    header.Authorization = `Bearer ${token.accessToken}`;
  }
  return header;
};

const getHeaders = async (extraHeaders: object, isMultipart: boolean) => {
  const headers = new Headers();

  if (!isMultipart) {
    headers.set('Content-Type', 'application/json');
  }

  const authHeader = await getAuthHeader();

  Object.entries(authHeader).forEach(([key, value]) => {
    headers.set(key, value);
  });
  Object.entries(extraHeaders).forEach(([key, value]) => {
    headers.set(key, value);
  });
  return headers;
};
const getBody = (body: object, isMultipart: boolean) => {
  if (!isMultipart) {
    return JSON.stringify(body);
  } else {
    return body as BodyInit_;
  }
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

const request = async (url: string, option: RequestInit) => {
  console.log(fetchToCurl(url, option));
  const response = await fetch(url, option);
  const contentType = response.headers.get('content-type') || '';

  if (response.ok) {
    if (contentType.includes('application/json')) {
      const json = await response.json();
      return json;
    } else {
      const text = await response.text();
      return text;
    }
  }

  if (contentType.includes('application/json')) {
    const data = await response.json();
    if (response.status >= 200 && response.status < 400) {
      return data;
    }
    if (response.status >= 400) {
      // TODO: access token 만료됐을 때 refresh token 조회 후 갱신로직 추가
      throw new SweetError({
        errorMessage: data.message,
        statusCode: response.status,
        errorCode: data.code,
      });
    }
  } else {
    const text = await response.text();
    throw new SweetError({
      errorMessage: text,
      statusCode: response.status,
    });
  }
};

class Api implements ApiParam {
  async get<T>(option: ApiOptions): Promise<T> {
    const {url, param = {}, headers = {}, isMultipart = false} = option;
    const apiUrl = `${url}${connectQueryParam(param)}`;

    const res = request(apiUrl, {
      method: 'GET',
      headers: await getHeaders(headers, isMultipart),
    });

    return res as T;
  }
  async post<T = void>(option: ApiOptions): Promise<T> {
    const {url, body = {}, headers = {}, isMultipart = false} = option;
    const res = request(url, {
      method: 'POST',
      headers: await getHeaders(headers, isMultipart),
      body: getBody(body, isMultipart),
    });

    return res as T;
  }
  async put<T = void>(option: ApiOptions): Promise<T> {
    const {url, body = {}, headers = {}, isMultipart = false} = option;

    const res = request(url, {
      method: 'PUT',
      headers: await getHeaders(headers, isMultipart),
      body: getBody(body, isMultipart),
    });
    return res as T;
  }
  async patch<T = void>(option: ApiOptions): Promise<T> {
    const {url, body = {}, headers = {}, isMultipart = false} = option;

    const res = request(url, {
      method: 'PATCH',
      headers: await getHeaders(headers, isMultipart),
      body: getBody(body, isMultipart),
    });
    return res as T;
  }
  async delete<T = void>(option: ApiOptions): Promise<T> {
    const {url, body = {}, headers = {}, isMultipart = false} = option;
    const res = request(url, {
      method: 'DELETE',
      headers: await getHeaders(headers, isMultipart),
      body: getBody(body, isMultipart),
    });

    return res as T;
  }
}

export const api = new Api();

// TODO: 서버에서 공통으로 응답타입 지정하면 변경
// interface ApiParam {
//   get: <T>(option: ApiOptions) => Promise<SweetResponse<T>>;
//   post: <T = void>(option: ApiOptions) => Promise<SweetResponse<T>>;
//   put: <T = void>(option: ApiOptions) => Promise<SweetResponse<T>>;
//   delete: <T = void>(option: ApiOptions) => Promise<SweetResponse<T>>;
// }

// const getHeaders = async (extraHeaders: object) => {
//   const headers = new Headers();
//   headers.set('Content-Type', 'application/json');
//   const token = await tokenStorage.getTokens();
//   if (token) {
//     headers.set('Authorization', `Bearer ${token.accessToken}`);
//   }
//   Object.entries(extraHeaders).forEach(([key, value]) => {
//     headers.set(key, value);
//   });
//   return headers;
// };

// const connectQueryParam = (param: object) => {
//   const validParam = Object.entries(param).filter(([_, value]) => {
//     return value !== undefined;
//   });

//   if (validParam.length === 0) {
//     return '';
//   }

//   const queryParam = validParam
//     .map(([key, value]) => {
//       return `${key}=${value}`;
//     })
//     .join('&');
//   return `?${queryParam}`;
// };

// const request = async (url: string, option: RequestInit) => {
//   console.log(fetchToCurl(url, option));
//   const response = await fetch(url, option);
//   const contentType = response.headers.get('content-type') || '';

//   if (response.ok) {
//     if (contentType.includes('application/json')) {
//       const json = await response.json();
//       return json;
//     } else {
//       const text = await response.text();
//       return text;
//     }
//   }

//   if (contentType.includes('application/json')) {
//     const data = await response.json();
//     if (response.status >= 200 && response.status < 400) {
//       return data;
//     }
//     if (response.status >= 400) {
//       // TODO: access token 만료됐을 때 refresh token 조회 후 갱신로직 추가
//       throw new SweetError({
//         errorMessage: data.message,
//         statusCode: response.status,
//       });
//     }
//   } else {
//     const text = await response.text();
//     throw new SweetError({
//       errorMessage: text,
//       statusCode: response.status,
//     });
//   }
// };

// class Api implements ApiParam {
//   async get<T>(option: ApiOptions): Promise<SweetResponse<T>> {
//     const {url, param = {}, headers = {}} = option;
//     const apiUrl = `${url}${connectQueryParam(param)}`;

//     const res = await request(apiUrl, {
//       method: 'GET',
//       headers: await getHeaders(headers),
//     });

//     return res as SweetResponse<T>;
//   }
//   async post<T = void>(option: ApiOptions): Promise<SweetResponse<T>> {
//     const {url, body = {}, headers = {}} = option;
//     const res = await request(url, {
//       method: 'POST',
//       headers: await getHeaders(headers),
//       body: JSON.stringify(body),
//     });

//     return res as SweetResponse<T>;
//   }
//   async put<T = void>(option: ApiOptions): Promise<SweetResponse<T>> {
//     const {url, body = {}, headers = {}} = option;

//     const res = await request(url, {
//       method: 'PUT',
//       headers: await getHeaders(headers),
//       body: JSON.stringify(body),
//     });
//     return res as SweetResponse<T>;
//   }
//   async patch<T = void>(option: ApiOptions): Promise<SweetResponse<T>> {
//     const {url, body = {}, headers = {}} = option;

//     const res = await request(url, {
//       method: 'PATCH',
//       headers: await getHeaders(headers),
//       body: JSON.stringify(body),
//     });
//     return res as SweetResponse<T>;
//   }
//   async delete<T = void>(option: ApiOptions): Promise<SweetResponse<T>> {
//     const {url, body = {}, headers = {}} = option;
//     const res = await request(url, {
//       method: 'DELETE',
//       headers: await getHeaders(headers),
//       body: JSON.stringify(body),
//     });

//     return res as SweetResponse<T>;
//   }
// }

// export const api = new Api();
