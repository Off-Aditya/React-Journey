import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const increaseNum = () => {
    setNum(num+1);
  }

  const decreaseNum = () => {
    setNum(num-1);
  }

  const increaseFive = () => {
    setNum(num+5);
  }

  const decreaseFive = () => {
    setNum(num-5);
  }

  return (
    <>
      <h1>{num}</h1>
      <button onClick={increaseNum} >Increase</button>
      <button onClick={decreaseNum} >Decrease</button>
      <button onClick={increaseFive} >Increment by 5</button>
      <button onClick={decreaseFive} >Decrement by 5</button>
    </>
  )
}

export default App