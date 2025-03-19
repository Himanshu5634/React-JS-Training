import React, { useEffect } from "react";
import { useState } from "react";
import TodoItem from "./Components/ListTodo/TodoItem";

const App = () => {
  const [todos, setTodos] = useState( JSON.parse(localStorage.getItem("todos")) || []);
  const [error,setError] = useState("")
  const [todo,setTodo] = useState("")
  /**
   * 
   * @param {*} "e" 
   * @returns {Promise<void>} todo
   */
  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      if (todo.length <= 0 ) {
        setError("please enter todo first*");
        return
      }
      const newTodo = {
        id: parseInt(Math.random()*100),
        todo: todo,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setError("")
      setTodo("")
    } catch (error) {
      console.log(error);
    }
  };
  

  
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos]);


  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="error">{error}</div>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name="todo" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter here..."/>
            <button type="submit">add</button>
          </form>
        </div>
        <div className="todos">
          {todos.length <= 0 && (
            <>
              <p>todos not found.</p>
            </>
          )}
          {todos.map((todo,index) => {
            return (
              <div className="todo" key={todo.id}>
                <TodoItem index={index} todoItem={todo} todos={todos} setTodos={setTodos} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
