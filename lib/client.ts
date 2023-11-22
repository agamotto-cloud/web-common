
interface Global {
    globalToken: string | null;
    globalBaseUrl: string;
    defaultHeaders: any;
}
var globalVar: Global = {
    globalToken: null,
    globalBaseUrl: 'http://localhost:3000/api/v1/',
    defaultHeaders : {
        'Content-Type': 'application/json',
    },
};

console.log("请求接口初始化")
export function setBaseUrl(url: string) {
    globalVar.globalBaseUrl = url;
}



export function setDefaultHeaders(headers: any) {
    globalVar.defaultHeaders = { ...globalVar.defaultHeaders, ...headers };
}

export function setToken(token: string) {
    globalVar.globalToken = token;
    setDefaultHeaders({
        Authorization: `Bearer ${token}`,
    });
}


export async function get(endpoint: string, params?: any) {
    const urlParams = params ? `?${new URLSearchParams(params).toString()}` : '';
    const response = await fetch(`${globalVar.globalBaseUrl}${endpoint}?${urlParams}`, {
        method: 'GET',
        headers: globalVar.defaultHeaders,
    });
    return response.json();
}

export async function post(endpoint: string, body: any, params?: any) {
    const urlParams = params ? `?${new URLSearchParams(params).toString()}` : '';
    const response = await fetch(`${globalVar.globalBaseUrl}${endpoint}${urlParams}`, {
        method: 'POST',
        headers: globalVar.defaultHeaders,
        body: JSON.stringify(body),
    });
    return response.json();
}




const client = {
    get,
    post,
    setBaseUrl,
    setDefaultHeaders,
    setToken,
    global: globalVar,
}



export default client;