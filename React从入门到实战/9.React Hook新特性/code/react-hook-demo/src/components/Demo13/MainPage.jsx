import React from "react"
import ChildPage from "./ChildPage"

// props 路由 自定义事件
export const MyContext = React.createContext();
function MainPage(){
    return(
        <div>
            <MyContext.Provider value="Hello React useContext">
                <ChildPage />
            </MyContext.Provider>
        </div>
    )
}

export default MainPage