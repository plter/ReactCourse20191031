import React from "react"

export default class Child extends React.Component{

    clickHandle = (e) =>{
        this.props.onMyEvent("父标题");
    }
    
    render(){
        return(
            <div>
                Child:{ this.props.title }
                <button onClick={ this.clickHandle }>传递数据</button>
            </div>
        )
    }
}