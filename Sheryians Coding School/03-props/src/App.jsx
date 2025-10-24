import React from 'react'
import Card from './components/Card'

const App = () => {

  // const item = ''

  return (
    <div className="parent">
      <Card user='Ankit Kumar' age={21} img="https://plus.unsplash.com/premium_photo-1736544095568-701023fee17c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880" />
      <Card user='Harshit Ranjan' age={22} img="https://images.unsplash.com/photo-1759031807407-68c066e63bbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>
    </div>
  )
}

export default App