import React, {useState} from "react"

function ToDoList(){
    const [tasks, setTasks] = useState(["Chop food", "Buy water", "Do latisa"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);

    }
    function addTask() {
        if(setTasks !== ""){
            setTasks(t => [...t, newTask]);
        setNewTask("");

        } else {
            alert(" Please set a task")
        }
        

    }
    function deleteTask(index) {

    }
    function moveTaskUp(index) {

    }
    function moveTaskDown(index) {
         
    }

    return(
        <div className="list-container">
            <h1>To-Do-List</h1>
            <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => <li><span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button></li>)}
            </ol>
        </div>
    );



}

export default ToDoList