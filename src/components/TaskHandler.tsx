import "./TaskHandler.css";
import { useState } from "react";

const TaskHandler = () => {
    function addTask(){
        
    }
    function handleSubmit(e: any) {
        e.preventDefault();
    }
    const [taskUpdater, setTaskUpdater] = useState("");
    return (
        <>
            <h1 className="header">Task Manager App</h1>
            <form className="new-item-form">
                <div className="form-row">
                    <input
                        placeholder="Enter New Task"
                        type="text"
                        name="task"
                        value={taskUpdater}
                        onChange={e => {
                            setTaskUpdater(e.target.value);
                        }}
                    />
                    <button
                        type="submit"
                        className="btn"
                        onClick={handleSubmit}
                    >
                        Add Task
                    </button>
                </div>
            </form>
            <h3>Added Task</h3>
            <ul className="list">
                <li>
                    <label htmlFor="taskitem">
                        <input
                            type="checkbox"
                        
                            className="input"
                        />
                        Item 1
                    </label>
                    <button className="btn btn-danger" onClick={handleSubmit}>
                        Delete
                    </button>
                </li>
                <li>
                    <label htmlFor="taskitem">
                        <input
                            type="checkbox"
                           
                            className="input"
                        />
                        Item 1
                    </label>
                    <button className="btn btn-danger" onClick={handleSubmit}>
                        Delete
                    </button>
                </li>
            </ul>
        </>
    );
};

export default TaskHandler;
