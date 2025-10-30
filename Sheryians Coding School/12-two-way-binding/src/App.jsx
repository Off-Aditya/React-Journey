import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();  // use to not refreshing the page after form
    console.log('Form Submitted By', title);  

    setTitle('')
  }
  return (
    <div>
      {/* <form onSubmit={submitHandler}> */}
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>

        {/* <input type="text" placeholder='Enter your name' onChange={(e)=>{
          console.log(e.target.value);
        }} /> */}

        <input 
          type="text" 
          placeholder='Enter your name' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
            
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App