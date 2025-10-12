import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'


function App() {
  return (
    <>
      <center class="todo-container">
        <AppName />
        <div class="container text-center">
          <AddTodo />
          
          <div class="items-container">
            <TodoItem1 />
            <TodoItem2 />
          </div>
          

        </div>
      </center>

    </>
  )
}

export default App
