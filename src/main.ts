
console.log('Hello World!')
import { client } from '../lib/main';
client.setToken("abc123")
client.setBaseUrl("https://www.baidu.com/api/v1/")


client.setDefaultHeaders({
    "abc": "123"
})



client.get("avc")
console.log(client)

