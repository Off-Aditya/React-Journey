import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({ user: 'Aditya', age: 22 })

  const increaseNum = () => {
    setNum({ ...num, user: num.user = 'Aditya', age: num.age + 1 });
  }

  const decreaseNum = () => {
    setNum({ ...num, user: num.user = 'Neon', age: num.age - 1 });
  }

  const increaseFive = () => {
    const newNum = { ...num };
    newNum.user = 'Harshit';
    newNum.age = newNum.age + 5;
    setNum(newNum);
  }

  const decreaseFive = () => {
    setNum({ ...num, user: num.user = 'Ankit', age: num.age - 5 });
  }

  const [arr, setArr] = useState([10, 20, 30, 40]);

  const addNum = () => { 
    const newNum = [...arr]
    newNum.push(90)

    setArr(newNum)
  }

  // const addNum = () => {
  //   setArr([...arr, 50])
  // }
  const [test, setTest] = useState(0)

  const increment = () =>{
    setTest(prev => (prev+1))
    setTest(prev => (prev+1))
    setTest(prev => (prev+1))
  }
  
  return (
    <>
      <h1>Hello, {num.user}</h1>
      <h1>Age: {num.age}</h1>

      <button onClick={increaseNum} >Increase</button>
      <button onClick={decreaseNum} >Decrease</button>
      <button onClick={increaseFive} >Increment by 5</button>
      <button onClick={decreaseFive} >Decrement by 5</button>

      <h1>Array : {arr.join(" ")}</h1>
      <button onClick={addNum}>Add</button>

      <h1>Counter: {test}</h1>
      <button onClick={increment}>+</button>

    </>
  )
}

export default App