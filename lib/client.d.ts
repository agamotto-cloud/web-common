interface Client {
    fetch: (url: string, options?: any) => Promise<any>;
    get: (url: string, options?: any) => Promise<any>;
    post: (url: string, options?: any) => Promise<any>;
  }
  

  export var client: Client;
  
  