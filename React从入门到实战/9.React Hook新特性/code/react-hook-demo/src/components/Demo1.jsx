import React,{ useState } from "react"

// export default class Demo1 extends React.Component{

//     state = {
//         count:0
//     }

//     render(){
//         return(
//             <div>
//                 Hello:{ this.state.count }
//             </div>
//         )
//     }
// }

export default () =>{

    /**
     * count:状态
     * setCount:setState -> setCount修改状态
     * useState(0):默认值
     */
    const [count,setCount] = useState(10);
    const [page,setPage] = useState(0);

    return(
        <div>
            Hello:{ count } - { page }
            <button onClick={ () =>{ setCount(count+1) } }>Add</button>
        </div>
    )
}