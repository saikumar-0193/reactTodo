import React, { useState } from "react";
import './App.css';

function App() {
  let [todoInput, updateInput] = useState("");
  let [todoList, updateTodo] = useState([
    { id: 1, task: "learn React" },
    { id: 2, task: "learn Angular" },
    { id: 3, task: "learn Vue" }
  ]);

  let nextId = 4;

  function deleteTodo(id) {
    let updatedTodos = todoList.filter((todo) => todo.id !== id);
    updateTodo(updatedTodos);
  }

  function addNewTodo() {
    if (todoInput === "") {
      alert("Please add a task");
    } else {
      let newTodos = [
        ...todoList,
        {
          id: nextId++, // Ensure unique id for each new todo
          task: todoInput
        }
      ];
      updateTodo(newTodos);
      updateInput(""); // Clear the input field after adding
    }
  }

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">To-do App using React</h3>
      <div className="input-group">
        <input
          onChange={(e) => updateInput(e.target.value)}
          value={todoInput}
          className="form-control"
          type="text"
        />
        <button onClick={addNewTodo} className="btn btn-primary">Add</button>
      </div>
      <ul className="list-group mt-4">
        {todoList.map((todo) => (
          <li key={todo.id} className="list-group-item"> {/* Use todo.id as key */}
            <p>{todo.task}</p>
            <button onClick={() => deleteTodo(todo.id)} className="btn">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
