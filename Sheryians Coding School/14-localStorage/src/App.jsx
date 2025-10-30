import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()

  localStorage.setItem('user', 'Aditya')
  localStorage.setItem('age', '22')

  const user_name = localStorage.getItem('user')
  const user_age = localStorage.getItem('age')

  console.log(user_name, user_age);

  localStorage.removeItem('user')
  localStorage.removeItem('age')

  const user = {
    username: 'Neon',
    age: 5,
    city: 'Lucknow',
  }
  localStorage.setItem('user', JSON.stringify(user))
  

  const testLocalStorage = JSON.parse(localStorage.getItem('user'))
  console.log(testLocalStorage)
  


  return (
    <div>App</div>
  )
}

export default App