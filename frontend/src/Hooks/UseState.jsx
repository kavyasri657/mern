import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] =useState(0);
    const [value,setValue]=useState("")
    const handleIncrement =()=>{
        setCount(count+1) }
    const handleDecrement =()=>{
        setCount(count-1) }
    const handleReset =()=>{
        setCount(0)      
    }
  return (
    <div>
        <h1>{value}</h1>
        <input type="text" onChange={(e)=>setValue(e.target.value)}/>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>



    </div>
  )
}

export default UseState