// import React from "react"

// export default class Demo2 extends React.Component{

//     state = {
//         count:0
//     }

//     componentDidMount(){
//         document.title = `You clicked ${this.state.count} times`
//     }

//     componentDidUpdate(){
//         document.title = `You clicked ${this.state.count} times`
//     }

//     render(){
//         return(
//             <div>
//                 Hello:{ `You clicked ${this.state.count} times` }
//                 <button onClick={ () =>{ this.setState({count:this.state.count+=1}) } }>Add</button>
//             </div>
//         )
//     }
// }

import React,{ useState,useEffect } from "react"

export default () =>{

    const [count,setCount] = useState(0);

    /**
     * useEffect：
     *      componentDidMount
     *      componentDidUpdate
     *      componentWillUnmount
     */
    useEffect(() =>{
        document.title = `You clicked ${count} times`
    })

    return(
        <div>
            Hello:{`You clicked ${ count } times`}
            <button onClick={ () =>{ setCount(count+1) } }>Add</button>
        </div>
    )
}