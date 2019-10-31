import React from 'react';
import Parent from "./components/coms/Parent"
import { connect } from "react-redux"
// import { increment,decrement } from "./actions/counter"
import * as counterActions from "./actions/counter"
import { bindActionCreators } from "redux"
import User from "./components/user"

class App extends React.Component {
    render(){
        return (
            <div className="container">
                {/* <Parent/> */}
                <h1 className="jumbotron-heading text-center">{ this.props.counter }</h1>
                <p className="text-center">
                    {/* <button onClick={ this.props.onIncrement } className="btn btn-primary">increment</button>
                    <button onClick={ this.props.onDecrement } className="btn btn-success">decrement</button> */}
                    {/* <button onClick={ () => (increment()) } className="btn btn-primary">increment</button>
                    <button onClick={ () => (decrement()) } className="btn btn-success">decrement</button> */}
                    <button onClick={ () => this.props.counterActions.increment(10) } className="btn btn-primary">increment</button>
                    <button onClick={ () => this.props.counterActions.decrement(5) } className="btn btn-success">decrement</button>
                </p>
                <User />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    
    return{
        counter:state.counter
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         increment: () => { dispatch(increment()) },
//         decrement: () => { dispatch(decrement()) }
//     }
// }

const mapDispatchToProps = (dispatch) =>{
    return{
        counterActions:bindActionCreators(counterActions,dispatch)
    }
}

// 先后顺序不能颠倒
export default connect(mapStateToProps,mapDispatchToProps)(App)