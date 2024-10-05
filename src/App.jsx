import TodoData from './component/todo/TodoData';
import TodoNew from './component/todo/TodoNew';
import './component/todo/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
