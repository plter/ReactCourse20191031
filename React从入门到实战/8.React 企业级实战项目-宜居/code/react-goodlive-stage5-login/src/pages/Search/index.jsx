import React from "react"
import SearchHeader from "./SearchHeader"
import api from "../../api"
import { connect } from "react-redux"
import SearchList from "./SearchList"


class Search extends React.Component{

    render(){

        const content = this.props.match.params.content
        return(
            <div>
                <SearchHeader history={ this.props.history }/>
                <SearchList  city={ this.props.city.cityName } content = {content}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(Search)