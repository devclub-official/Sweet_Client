export const fetchToCurl = (url: string, options: RequestInit) => {
  let curl = [`curl -X ${options.method || 'GET'}`];

  if (options.headers) {
    const headers = options.headers;

    if (headers instanceof Headers) {
      headers.forEach((value: string, key: string) => {
        curl.push(`-H "${key}: ${value}"`);
      });
    } else if (Array.isArray(headers)) {
      headers.forEach(([key, value]) => {
        curl.push(`-H "${key}: ${value}"`);
      });
    } else if (typeof headers === 'object' && headers !== null) {
      Object.entries(headers).forEach(([key, value]) => {
        curl.push(`-H "${key}: ${value}"`);
      });
    }
  }

  if (options.body) {
    const body =
      typeof options.body === 'object'
        ? JSON.stringify(options.body)
        : options.body;
    curl.push(`--data '${body}'`);
  }

  curl.push(`"${url}"`);

  return curl.join(' ');
};
