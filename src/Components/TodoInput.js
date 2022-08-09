import React, { useState } from 'react';
import "../Css/TodoInput.css";

const TodoInput = ({ createTodo }) => {
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(task);
        setTask("");
    };
    
    return (
        <>
            <form className='TodoInput' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter Task'
                    id='task'
                    name='task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button>Add Todo</button>
            </form>
        </>
    )
}

export default TodoInput;
