import React from "react"
import router from 'umi/router';
import axios from "axios"

export default class User extends React.Component{

    componentDidMount(){
        axios.get("/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
        .then(res => {
            console.log(res.data);
        })
    }

    render(){
        return(
            <div>
                User
                <button onClick={ () => router.goBack() }>会到home</button>
            </div>
        )
    }
}