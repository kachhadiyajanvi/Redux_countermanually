import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement,passData } from './App/Reduxer/Counterslice';
import { useState } from 'react';
function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  const [inputValue,setinputValue]=useState('');
  const handlepassdata=()=>{
    dispatch(passData(inputValue));
    setinputValue('');
  }
  return (
    <div className="App">
        <input type='text' value={inputValue} onChange={(e)=>setinputValue(e.target.value)}></input><br/>
         <button type='text' onClick={handlepassdata} >Increment or decrement</button> 
        <h1>COUNT:{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  );
}

export default App;
