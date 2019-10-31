import React from "react"
import SwipeableViews from 'react-swipeable-views';
import Pagination from "./Pagination"
import "./style.less"

export default class Swiper extends React.Component {


    constructor(){
        super();
        this.state = {
            currentIndex:0
        }
    }

    handleChangeIndex = index => {
        this.setState({
            currentIndex:index
        })
    }

    render() {
        const banners = this.props.banners;
        return (
            <div className="swiper">
                <SwipeableViews onChangeIndex={ this.handleChangeIndex }>
                    {
                        banners.map((element,index) => {
                            return(
                                <div className="swiper-view" key={index}>
                                    <img src={ element } alt=""/>
                                </div>
                            )
                        })
                    }
                </SwipeableViews>
                <Pagination index={ this.state.currentIndex } dots={banners.length}/>
            </div>
        )
    }
}