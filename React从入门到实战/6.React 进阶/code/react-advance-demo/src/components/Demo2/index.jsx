import React,{ Fragment } from "react"

class Item extends React.Component {
    render() {
        return (
            <Fragment>
                <li>Demo2 Item1</li>
                <li>Demo2 Item1</li>
            </Fragment>
        )
    }
}


export default class Demo2 extends React.Component {
    render() {
        return (
            <ul>
                <Item />
            </ul>
        )
    }
}