



export * from './clientImpl';

declare global {
  interface ImportMeta {
    env: {
      BASE_URL: string;
      [key: string]: string | boolean | undefined;
    };
  }
}
