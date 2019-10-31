import React from "react"
import LoginView from "./LoginView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userInfoActions from "../../actions/userinfo"

class Login extends React.Component{

    loginHandler(user){
        // 例如：user就是后台返回来的登陆信息  ( token:令牌 )
        // 用户信息的存储：redux\本地
        this.props.userInfoActions.loginUser({
            name:user
        })
        
        // 返回上一个页面
        window.history.back(-1);
        // 记录上一个路径信息:记录
        // 从哪里来，回哪里去
    }

    render(){
        return(
            <div>
                <LoginView onLoginHandler={ this.loginHandler.bind(this) }/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions:bindActionCreators(userInfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)