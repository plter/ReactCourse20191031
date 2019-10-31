import React from "react"
import "./style.less"

export default class SearchInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            values:""
        }
    }
    
    getValuesHandler(event){
        this.setState({
            values:event.target.value
        })
    }

    keyUpHandler(event){
        /**
         * 回车判断
         */
        if(event.keyCode == 13){
            // 动态路由跳转
            this.props.history.push("/search/"+this.state.values);
        }
    }

    render() {
        return (
            <input
                type="text"
                className="search-input"
                value={this.state.values}
                placeholder="请输入搜索内容"
                onKeyUp={ this.keyUpHandler.bind(this) }
                onChange={this.getValuesHandler.bind(this)}
            />
        )
    }
}