import React from "react"
import { Link } from "react-router-dom"
import "./style.less"

export default class Item extends React.Component {
    render() {
        var item = this.props.data;
        return (
            <div className="list-item">
                <Link to={`/details/${item.id}`}>
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
                            <p dangerouslySetInnerHTML={{ __html: item.price + "/月" }} />
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}