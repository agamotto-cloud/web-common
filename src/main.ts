
console.log('Hello World!')
import x from "./cccc"
import client from '../lib/client';
client.setToken("abc123")
client.setBaseUrl("https://www.baidu.com/api/v1/")


client.setDefaultHeaders({
    "abc": "123"
})



client.get("avc")
console.log(client)
console.log(client.global)

x()