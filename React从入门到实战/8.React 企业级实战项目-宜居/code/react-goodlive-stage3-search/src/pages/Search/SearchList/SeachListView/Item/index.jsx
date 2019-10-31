import React from "react"
import "./style.less"

export default class Item extends React.Component {
    render() {
        var item = this.props.data;
        return (
            <div className="list-item">
                <img src={item.img} alt="" />
                <div className="mask">
                    <div className="left">
                        <p>{item.title}</p>
                        <p>{item.houseType}</p>
                    </div>
                    <div className="right">
                        <div className="btn">
                            {item.rentType}
                        </div>
                        {/* dangerouslySetInnerHTML:识别标签结构 */}
                        <p dangerouslySetInnerHTML={{ __html: item.price+"/月" }} />
                    </div>
                </div>
            </div>
        )
    }
}