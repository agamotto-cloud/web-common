import { Global, ClientType } from ".";


var globalVar: Global = {
    globalToken: null,
    globalBaseUrl: import.meta.env.BASE_URL ? import.meta.env.BASE_URL : 'http://localhost:3000/api/v1/',
    defaultHeaders: {
        'Content-Type': 'application/json',
    },
};


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

async function handleBody(response: Response) {
    const body = await response.json()
    if (body.code != 0) {
        //抛出异常，内容就是这个body
        throw new Error(body);
    }
    return body;
}


export async function get(endpoint: string, params?: any) {
    const urlParams = params ? `?${new URLSearchParams(params).toString()}` : '';
    const response = await fetch(`${globalVar.globalBaseUrl}${endpoint}?${urlParams}`, {
        method: 'GET',
        headers: globalVar.defaultHeaders,
    });
    return handleBody(response);
}

export async function post(endpoint: string, body: any, params?: any) {
    const urlParams = params ? `?${new URLSearchParams(params).toString()}` : '';
    const response = await fetch(`${globalVar.globalBaseUrl}${endpoint}${urlParams}`, {
        method: 'POST',
        headers: globalVar.defaultHeaders,
        body: JSON.stringify(body),
    });
    return handleBody(response);
}

async function put(endpoint: string, body: any, params?: any) {
    const urlParams = params ? `?${new URLSearchParams(params).toString()}` : '';
    const response = await fetch(`${globalVar.globalBaseUrl}${endpoint}${urlParams}`, {
        method: 'PUT',
        headers: globalVar.defaultHeaders,
        body: JSON.stringify(body),
    });
    return handleBody(response);
}

async function deleted(endpoint: string, params?: any) {
    const urlParams = params ? `?${new URLSearchParams(params).toString()}` : '';
    const response = await fetch(`${globalVar.globalBaseUrl}${endpoint}?${urlParams}`, {
        method: 'GET',
        headers: globalVar.defaultHeaders,
    });
    return handleBody(response);
}




export const client: ClientType = {
    get,
    post,
    put,
    delete: deleted,
    setBaseUrl,
    setDefaultHeaders,
    setToken,

}


