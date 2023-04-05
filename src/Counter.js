import React from 'react'
import { incrementCount,decrementCount,resetCount } from './actions/actionCreators'
import { useSelector,useDispatch } from 'react-redux'

export default function Counter() {
    const counter = useSelector((state)=>state.count);
    const dispatch = useDispatch();
    function handleIncre(){
        dispatch(incrementCount())
    }
  return (
    <div>
      <h2>Counter App Using Hook</h2>
      <h3>{counter}</h3>
      <button onClick={handleIncre}>Increment</button>
      <button onClick={()=>dispatch(decrementCount())}>Decrement</button>
      <button onClick={()=>dispatch(resetCount())}>Reset</button>
    </div>
  )
}
