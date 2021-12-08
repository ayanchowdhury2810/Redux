import React from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './actions/index'

function App() {
  const mystate = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>Increment/Decrement Counter </h1>
        <p>using React and Redux</p>

        <div className='workplace'>
          <button onClick={() => dispatch(decNumber())}><span>-</span></button>
          <input value={mystate}  type='text' />
          <button onClick={() => dispatch(incNumber())}><span>+</span></button>
        </div>
      </div>
    </div>
  )
}

export default App
