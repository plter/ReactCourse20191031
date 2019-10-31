import React from "react"
import Item from "./Item"
import "./style.less"

export default class SearchListView extends React.Component {
    /**
     * 数据会发生改变的情况下：
     *     key：坚决杜绝使用index下标作为唯一索引
     * 
     */
    render() {
        const data = this.props.data;
        return (
            <div className="list-container">
               {
                   data.map((element,index) => {
                       return <Item data={ element } key={index}/>
                   })
               }
            </div>
        )
    }
}