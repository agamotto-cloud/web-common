

export interface Global {
  globalToken: string | null;
  globalBaseUrl: string;
  defaultHeaders: any;
}

declare var globalVar: Global;

declare function setBaseUrl(url: string): void;

declare function setDefaultHeaders(headers: any): void;

declare function setToken(token: string): void;

export { globalVar, setBaseUrl, setDefaultHeaders, setToken };




import client from './client';
export { client };

// declare global {
//   interface ImportMeta {
//     env: {
//       BASE_URL: string;
//       [key: string]: string | boolean | undefined;
//     };
//   }
// }
