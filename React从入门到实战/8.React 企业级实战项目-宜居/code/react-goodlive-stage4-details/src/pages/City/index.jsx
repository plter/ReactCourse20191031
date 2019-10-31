import React from "react"
import CityHeader from "../../components/Header"
import CurrentCity from "./CurrentCity"
import HotCity from "./HotCity"
import { connect } from "react-redux"
import * as cityActions from "../../actions/city"
import { bindActionCreators } from "redux"

/**
 * 城市的初始化来源：
 *     1.定位
 *     2.用户选择
 *     3.程序自动赋值
 * 
 */

class City extends React.Component{

    onCityNameHandler = (cityName) =>{
        this.props.cityActions.updateCity({
            cityName:cityName
        })

        // 返回到上一个页面
        window.history.back(-1);
        
        // 用户修改城市，需要存储
        localStorage.setItem("city",cityName);
    }

    render(){
        return(
            <div>
                <CityHeader title="城市选择"/>
                <CurrentCity city={ this.props.city.cityName }/>
                <HotCity cityNameHandler={ this.onCityNameHandler }/>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        city:state.city
    }
}

function mapDispatchToProps(dispatch){
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)