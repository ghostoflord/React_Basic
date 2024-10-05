import TodoData from './component/todo/TodoData';
import TodoNew from './component/todo/TodoNew';
import './component/todo/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {
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
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
