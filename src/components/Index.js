import React from 'react'
import {increaseValue,decreaseValue} from "../redux/action-creator";
import {useSelector, useDispatch} from "react-redux";

function Index() {
    const myState = useSelector(state => state.ourState.count)
    const disPatch = useDispatch();
    
  return (
    <div>
        <h1>Hello world</h1>
        <button
        onClick={()=> disPatch(increaseValue())}>Increment</button>
        <p>{myState}</p>
        <button
        
        onClick={()=> disPatch(decreaseValue())}>Increment</button>
      
    </div>
  )
}

export default Index
