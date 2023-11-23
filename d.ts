declare module 'web_main/main' {
    const main: any; 
    export default main;
  }

  declare global {
    interface ImportMeta {
      env: {
        BASE_URL: string;
        [key: string]: string | boolean | undefined;
      };
    }
  }
  