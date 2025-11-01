import React, { useState, useEffect } from 'react'

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    bChange();
    console.log('useEffect is running...');
  }, [a])

  // const aChange = () => {
  //   console.log('A is Changing !!');
  // }
  const bChange = () => {
    console.log('B is Changing !!');
  }

  // function random() {
  //   const a = Math.random()
  //   console.log(a)
  // }
  // random()

  return (
    <div>
      <h1>A : {a}</h1>
      <h1>B : {b}</h1>

      <button
        onClick={() => {
          setA(a + 1)
        }} >
        Change A
      </button>

      <button
        onClick={() => {
          setB(b - 1)
        }} >
        Change B
      </button>

    </div >
  )
}

export default App