import axios from "axios"
import setAuthorizationToken from "../utils/setAuthorizationToken"

export const login = (data) =>{
    return dispatch =>{
        return axios.post("/api/auth",data).then(res =>{
            const token = res.data;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token)
        })
    }
}