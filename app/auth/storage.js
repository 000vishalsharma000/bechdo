import * as SecureStore from 'expo-secure-store';
import jwtDecode from "jwt-decode";

const key= "authToken";

const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken);
        
    } catch (error) {
        console.log("Error storing auth Token ", error )   
    }

}

const getToken = async() => {
    try {
        return  await SecureStore.getItemAsync(key );
        
    } catch (error) {
        console.log('error getting the auth token ')
    }


}

const getUser =async () => {
    const token =await getToken();
    return (token ) ? jwtDecode(token) : null;
}

const removeToken =async () => {
    try {
        return await SecureStore.deleteItemAsync(key)
        
    } catch (error) {
        console.log("error removing the auth token", error );
    }
}

export default {
    getToken , 
    getUser,
    removeToken,
    storeToken
}