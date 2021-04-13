import React from 'react'
export default (props)=>{
    const [count, setCount]=React.useState(0)
    return(
    <div id="shopcart" onClick={(a)=>{setCount(count+1)}}>
        <a class="material-icons cart"></a>
        <span>{count?count:""}</span>
    </div>
)}