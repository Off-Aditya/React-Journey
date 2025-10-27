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

  function inputChanging(val) {
    console.log(val);
  }

  const pageScrolling = (val) => {
    // console.log(val);
    if (val > 0) {
      console.log('Downward Scrolling');
    } else {
      console.log('Upward Scrolling');
    }
  }

  return (
    <>

      <div onWheel={(elem) => {
        // console.log(elem.deltaY);
        pageScrolling(elem.deltaY);
      }}>

        <div className="page1"><h1>Hello, Neon</h1>

          <button onMouseEnter={mouseHover} onClick={singleClicked} onDoubleClick={doubleClicked}>change user</button>

          <button onClick={() => {
            console.log('Button Clicked');
          }}>Click Here</button>


          <input type="text" placeholder='Enter Name' onChange={typing} />

          <input type="text" placeholder='Again'
            onChange={function (elem) {
              inputChanging(elem.target.value)
            }} />


          <div>
            <div
              onMouseMove={(elem) => {
                console.log(elem.clientX, elem.clientY)
              }}
              className="box"></div>
          </div></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>

    </>
  )
}

export default App