





export * from './main';



export interface ClientType {
    get: (url: string, options?: any) => Promise<any>;
    post: (url: string, options?: any) => Promise<any>;
    put: (url: string, options?: any) => Promise<any>;
    delete: (url: string, options?: any) => Promise<any>;
    setBaseUrl: (url: string) => void;
    setDefaultHeaders: (headers: any) => void;
    setToken: (token: string) => void;
}



export interface Global {
    globalToken: string | null;
    globalBaseUrl: string;
    defaultHeaders: any;
}
