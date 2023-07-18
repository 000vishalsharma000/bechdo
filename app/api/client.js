import { create } from "apisauce";
import cache from '../utility/cache';
//apisauce is a wrapper around axios 
import authStorage from '../auth/storage';
import settings from "../config/setting";

const apiClient= create({
    baseURL : settings.apiUrl
});

apiClient.addAsyncRequestTransform(async (request)=> {
    const authToken = await authStorage.getToken();
    if (!authToken ) return ;
    request.headers["x-auth-token"]= authToken;
})

const get = apiClient.get;
apiClient.get = async (url, param , axiosConfig)=> {

    const response = await get(url, param, axiosConfig);

    if(response.ok){
        console.log("got the response ")
        cache.store(url, response.data );
        console.log( "data in response  "+ response.data)
        
        return response ;
    }

    console.log("did not get response ")
    const data = await cache.get(url);
    console.log( "data in chache "+ data)
    return data ? {ok: true, data }: response ;
}


export default apiClient;
