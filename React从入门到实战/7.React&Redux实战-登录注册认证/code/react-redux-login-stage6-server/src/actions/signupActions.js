import axios from 'axios'

export const userSignupRequest = (userData) =>{
    // thunk
    return dispatch =>{
        return axios.post("/api/users",userData)
    }
}
