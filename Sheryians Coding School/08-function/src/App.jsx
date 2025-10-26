import React from 'react'

const App = () => {
  const singleClicked = () => {
    console.log('One');
  }

  const doubleClicked = () => {
    console.log('Two');
  }

  const mouseHover = () => {
    console.log('Hover');
  }

  const typing = (elem) => {
    console.log(elem.target.value)
  }

  return (
    <>
      <h1>Hello, Neon</h1>

      <button onMouseEnter={mouseHover} onClick={singleClicked} onDoubleClick={doubleClicked}>change user</button>

      <button onClick={() => {
        console.log('Button Clicked');
      }}>Click Here</button>


      <input type="text" placeholder='Enter Name' onChange={typing} />

    </>
  )
}

export default App