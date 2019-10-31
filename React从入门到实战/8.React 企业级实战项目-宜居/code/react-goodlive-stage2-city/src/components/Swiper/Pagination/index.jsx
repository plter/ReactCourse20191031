import React from "react"
import "./style.less"

export default class Pagination extends React.Component {
    render() {
        const dots = this.props.dots;
        const dotsArr = new Array(dots).fill(1);  
        const currentIndex = this.props.index;  
        return (
            <div className="swiper-pagination">
                <ul>
                    {
                        dotsArr.map((element,index) => {
                            return <li className={ currentIndex === index ? 'selected' : ''} key={index}></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}