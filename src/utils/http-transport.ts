import { queryStringify } from './query-stringify';

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  method: Method;
  data?: any;
  timeout?: number;
  headers?: Record<string, string>;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export class HTTPTransport {
  get(url: string, options: OptionsWithoutMethod = {}) {
    this.request(url, { ...options, method: Method.GET }, options.timeout);
  }

  post(url: string, options: OptionsWithoutMethod = {}) {
    this.request(url, { ...options, method: Method.POST }, options.timeout);
  }

  put(url: string, options: OptionsWithoutMethod = {}) {
    this.request(url, { ...options, method: Method.PUT }, options.timeout);
  }

  delete(url: string, options: OptionsWithoutMethod = {}) {
    this.request(url, { ...options, method: Method.DELETE }, options.timeout);
  }

  request(
    url: string,
    options: Options = { method: Method.GET },
    timeout = 5000,
  ) {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === Method.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
