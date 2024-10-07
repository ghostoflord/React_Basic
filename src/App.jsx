import TodoData from './component/todo/TodoData';
import TodoNew from './component/todo/TodoNew';
import './component/todo/todo.css';
import { useState } from 'react';
import reactLogo from './assets/react.svg';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching Youtube" }
  ])

  const ghost = "ghost"
  const data = {
    age: 55,
    address: 'hanoi'
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={ghost}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
