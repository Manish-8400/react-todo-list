import {useState} from "react";
export default function Todolist(){
    let [todos,settodos]=useState(["sample task"]);
    let [newTodo,setnewTodo]=useState("");
    let addNewTask=()=>{
        settodos([...todos,newTodo]);
        setnewTodo("");
    }
    let updateTodoValue=(event)=>{
        setnewTodo(event.target.value);
    }
    return(<div>
        <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
        <br />
        <button onClick={addNewTask}>Add Task</button>
        <br />
        <br />
        <hr />
        <h4>TodoTask</h4>
        <ul>
            {todos.map((todo)=>(
                <li>{todo}</li>
            )
        )}
        </ul>
    </div>)
}