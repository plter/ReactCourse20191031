import React from "react"
import FootNav from "../../components/FootNav"
import HomeHeader from "./HomeHeader"
import Swiper from "../../components/Swiper"
import HomeHot from "./HomeHot"

// 引入图片
import banner1 from "../../static/images/banner1.png"
import banner2 from "../../static/images/banner2.png"
import banner3 from "../../static/images/banner3.png"

import { connect } from "react-redux"

class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHeader city={ this.props.city.cityName } history={ this.props.history }/>
                <Swiper banners={ [banner1,banner2,banner3] }/>
                <HomeHot city={ this.props.city.cityName }/>
                <FootNav />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(Home)