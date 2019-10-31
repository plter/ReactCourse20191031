/**
 * get  post
 */
import qs from "querystring"

export function httpGet(url){
    const result = fetch(url);
    return result;
}

export function httpPost(url,params){
    const result = fetch(url,{
        method:"POST",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            "Accept":"application/json,text/plain,*/*"
        },
        /** 
         * {
         *  name:"iwen"
         * }
         * 
         * name=iwen
         */
        body:qs.stringify(params)
    })

    return result;
}