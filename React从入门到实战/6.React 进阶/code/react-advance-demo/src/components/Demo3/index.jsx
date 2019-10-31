import React from "react"
import PropTypes from "prop-types"

const Topic = (props) =>{
    return(
        <div>
            <Comment/>
        </div>
    )
}

/**
 * 
 * 路由：this.props.history.push("/"):必须是路由直接子元素，如果是孙子元素，则不能使用
 * 
 * withRouter
 * 
 */

const Comment = (props,context) =>{
    return(
        <div>
            { context.color }
        </div>
    )
}

export default class Demo3 extends React.Component{

    getChildContext(){
        return{
            color:"red"
        }
    }

    render(){
        return(
            <div>
                <Topic/>
            </div>
        )
    }
}

Comment.contextTypes = {
    color:PropTypes.string
}
Demo3.childContextTypes = {
    color:PropTypes.string
}

