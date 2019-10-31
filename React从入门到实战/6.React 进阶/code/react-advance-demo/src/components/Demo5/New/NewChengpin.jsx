import React from "react"
import withFetch from "../withFetch"

const Chengpin = withFetch("http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php")(props =>{
    return(
        <div>
            <p>
                { props.data.chengpinInfo[0].title }
            </p>
        </div>
    )
})

export default Chengpin;