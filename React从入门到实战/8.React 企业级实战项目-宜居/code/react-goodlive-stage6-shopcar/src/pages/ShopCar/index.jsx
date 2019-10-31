import React from "react"
import { connect } from "react-redux" 
import OrderView from "./OrderView"
import UserView from "./UserView"
import ShopCarHeader from "../../components/Header"
import api from "../../api"

class ShopCar extends React.Component{

    constructor(){
        super();
        this.state = {
            order:[]
        }
    }

    componentWillMount(){
        // 判断是否登陆
        const userinfo = this.props.userinfo.name
        if(userinfo){
            
            // 网络请求
            api.order.orderData(userinfo)
            .then(res =>res.json())
            .then(data => {
                this.setState({
                    order:data
                })
            })

        }else{
            // 重定向到登陆
            this.props.history.push("/login");
        }

        
    }

    render(){
        return(
            <div>
                <ShopCarHeader title="购物车"/>
                <UserView user={ this.props.userinfo.name } city={ this.props.city.cityName }/>
                {
                    this.state.order.length>0 ?
                    <OrderView data={ this.state.order }/>
                    : <div>数据正在加载</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userinfo:state.userinfo,
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(ShopCar)