import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("Heading: ", title);
    // console.log("Task: ", detail);

    const copyTask = [...task]

    copyTask.push({ title, detail })
    setTask(copyTask)

    console.log(copyTask)


    setTitle('');
    setDetail('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
        className='flex gap-4 p-10 lg:w-1/2 flex-col items-start'
        onSubmit={(e) => {
          submitHandler(e);
        }}>
        <h1 className="text-4xl font-bold ">Your Notes</h1>

        <input
          type="text"
          className='px-5 w-full font-medium py-2 border-2 rounded outline-none'
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          required
        />

        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 border-2 rounded outline-none'
          placeholder='Write Details'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
          required
        />

        <button className='bg-white w-full font-medium text-black rounded outline-none px-5 py-2 active:scale-98'>Add Note</button>


        {/* <img className='h-52' src="https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png" alt="" /> */}

      </form>

      <div className=' lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className="text-4xl font-bold ">Recent Notes</h1>
        <div className="flex flex-wrap items-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div key={idx} className="relative h-52 w-40 bg-cover rounded-xl text-black py-9 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.detail}</p>
                <button
                  className='absolute left-10 bottom-3 cursor-pointer active:scale-95 bg-red-600 text-white font-bold rounded px-4 py-1'
                  onClick={() => {
                    deleteNote(idx);
                  }}>Delete</button>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default App