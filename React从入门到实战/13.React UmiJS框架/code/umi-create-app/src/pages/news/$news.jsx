import React from "react"

export default class News extends React.Component{

    componentDidMount(){
    }

    render(){
        return(
            <div>
                News:{ this.props.match.params.news }
            </div>
        )
    }
}