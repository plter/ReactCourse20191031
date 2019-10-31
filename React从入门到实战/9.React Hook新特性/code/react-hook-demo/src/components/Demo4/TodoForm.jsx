// import React,{ useState } from "react"

// const TodoForm =() =>{
//     const [value,setValue] = useState("")

//     return(
//         <div>
//             <input type="text" value={ value } onChange={ (e) =>setValue(e.target.value) }/>
//         </div>
//     )
// }

// export default TodoForm

//  https://github.com/rehooks/awesome-react-hooks

import React, { useState }  from "react";

const useInputValue = (initialValue) => {
    const [value,setValue] = useState(initialValue);

    return{
        value,
        onChange:e => setValue(e.target.value),
        resetValue:() => setValue("")
    }
}

const TodoForm =({ onSubmit }) =>{
    const {resetValue , ...text} = useInputValue("");

    function onSubmitHandler(e){
        e.preventDefault();
        onSubmit(text.value);
        resetValue(); // 清空输入框
    }

    return(
        <form onSubmit={ onSubmitHandler }>
            <input type="text" { ...text }/>
        </form>
    )
}

export default TodoForm