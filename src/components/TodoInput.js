import React, {useState} from "react"
import "./TodoInput.css";

const TodoInput = ({createTodo}) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      createTodo(task);
      setTask("");
    };
   return (
       <form className= "TodoInput" onSubmit={handleSubmit}>
        <input
        type = "text"
        placeholder = "write something"
        id = "task"
        name = "task"
        value = {task}
        onChange = {(e) => setTask(e.target.value)}
        />
        <button>Add new one</button>
       </form>
   );
};

export default TodoInput;