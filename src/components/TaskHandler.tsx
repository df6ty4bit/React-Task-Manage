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
            <h1>Task Manager App</h1>
            <form className="new-item-form">
                <div className="form-row">
                    <input
                        placeholder="Enter New Task"
                        type="text"
                        id="item"
                        value={taskUpdater}
                        onChange={e => {
                            setTaskUpdater(e.target.value);
                        }}
                    />
                    <button
                        className="btn"
                        onClick={handleSubmit}
                    >
                        Add Task
                    </button>
                </div>
            </form>
            <h3 className="header">Added Task</h3>
            <ul className="list">
                <li>
                    <label >
                        <input
                            type="checkbox"
                        
                            
                        />
                        Item 1
                    </label>
                    <button className="btn btn-danger" onClick={handleSubmit}>
                        Delete
                    </button>
                </li>
                <li>
                    <label >
                        <input
                            type="checkbox"
                           
                            
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
