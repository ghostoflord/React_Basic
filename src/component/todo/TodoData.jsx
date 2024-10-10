const TodoData = (props) => {

    const { todoList, deleteTodo } = props
    const handleClickDelete = (id) => {
        deleteTodo(id)
    }
    // const { todoList } = props;
    return (

        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div> {item.name}</div>
                        <button onClick={() => handleClickDelete(item.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;
