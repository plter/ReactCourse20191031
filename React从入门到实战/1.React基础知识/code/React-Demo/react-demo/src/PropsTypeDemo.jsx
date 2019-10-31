import React from 'react'
import PropTypes from 'prop-types';

export default class PropsTypeDemo extends React.Component{
    render(){
        return(
            <div>
                Hello:{ this.props.title }
            </div>
        )
    }
}

// PropsTypeDemo.propTypes = {
//     title:PropTypes.number.isRequired
// }

PropsTypeDemo.propTypes = {
    title:PropTypes.string
}

PropsTypeDemo.defaultProps = {
    title:'默认值'
}