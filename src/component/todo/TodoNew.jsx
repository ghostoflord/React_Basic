
import { useState } from "react";
const TodoNew = () => {
    const handleClick = () => {
        console.log(">>> check valueInput: ", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    const [valueInput, setValueInput] = useState("ghost")

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;
