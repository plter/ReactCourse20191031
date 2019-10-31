import React from "react"

export default class Compose extends React.Component{
    render(){
        return(
            <div>
                哈哈哈:{ this.props.children }
            </div>
        )
    }
}