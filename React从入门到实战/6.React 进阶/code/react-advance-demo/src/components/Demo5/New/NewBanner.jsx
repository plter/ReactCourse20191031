import React from "react"
import withFetch from "../withFetch"

const Banner = withFetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")(props =>{
    return(
        <div>
            <p>
                { props.data.banner[0].title }
            </p>
        </div>
    )
})

export default Banner;