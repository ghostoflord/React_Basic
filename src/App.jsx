import TodoData from './component/todo/TodoData';
import TodoNew from './component/todo/TodoNew';
import './component/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './component/layout/header';
import Footer from './component/layout/footer';

const App = () => {

  const [todoList, setTodoList] = useState([
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id);
    setTodoList(newTodo);
  }



  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //{key:value}
  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />

        {todoList.length > 0 ?
          <TodoData
            deleteTodo={deleteTodo}
            todoList={todoList}
          />
          :
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default App
