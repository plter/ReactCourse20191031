import React from "react"
import { Link,NavLink } from "react-router-dom";
import "./style.css"

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink activeClassName="selected" activeStyle={{ color:'red' }} exact to="/">Home页面</NavLink>
                        {/* <a href="#/home">Home页面</a> */}
                    </li>
                    <li>
                        {/* <NavLink activeClassName="selected" exact to="/mine">Mine页面</NavLink> */}
                        <NavLink
                            activeClassName="selected" 
                            exact
                            to={{
                                pathname:"/mine",
                                search: "?sort=name",
                                hash: "#the-hash",
                                state: { flag: 'flag' } // 隐形传递参数
                            }}
                        >Mine页面</NavLink>
                        {/* <a href="#/mine">Mine页面</a> */}
                    </li>
                    <li>
                        <NavLink activeClassName="selected" to="/mine/ucenter/1005/ime">UCenter页面</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}