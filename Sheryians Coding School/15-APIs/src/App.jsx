import { useState } from 'react'
import axios from 'axios'

const App = () => {

  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const data = await response.json();
  //   console.log(data);
  // }
  const [data, setData] = useState([])

  const getData = async () => {
    const {data} = await axios.get('https://picsum.photos/v2/list')
    setData(data)    
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem, idx) => {
          return (
            <h1 key={idx}>Hello {elem.author}</h1>
          )
        })}
      </div>
    </div>
  )
}

export default App