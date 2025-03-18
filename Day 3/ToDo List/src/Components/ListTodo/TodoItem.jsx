import React, { useEffect, useState } from "react";

const TodoItem = ({ todoItem, index,todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(todoItem.todo);
  const [completed,setCompleted] = useState(todoItem.completed)
  

  /**
   * 
   * @returns {Promise<void>} "delete todo"
   */
  const handleDelete = () => {
    setTodos(todos.filter((todo) => todoItem.id != todo.id));
  };

  /**
   * 
   * @returns {Promise<void>} "make todo completed"
   */
  const handleCompleted = () => {
    const todo = todos.map((todo) =>
      todo.id == todoItem.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(todo);
    setCompleted((prev) => !prev)
  };

  
  /**
   * @returns {Promise<void>} "edit todo"
   */
  const handleEdit = () => {
    const todo = todos.map((todo) =>
      todo.id == todoItem.id ? { ...todo, todo: newValue } : todo
    );

    setTodos(todo);
    setIsEditing(false);
  };

  return (
    <>
      <div className="todo-id">{index+1}</div>
      <div className="todo-contant">
        <div className="todo-check">
          <input type="checkbox" name="" id="" onClick={handleCompleted} />
        </div>
        <div className= "todo-edit">
          {isEditing ? (
            <input
              type="text"
              name=""
              id=""
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
          ) : (
            <div className={completed?"completed":""}>{todoItem.todo}</div>
          )}
        </div>
      </div>
      <div className="todo-actions">
        {!isEditing ? (
          <>
            <button className="btn-edit" disabled={completed} onClick={() => setIsEditing(true)}>EDIT</button>
            <button className="btn-delete" onClick={handleDelete}>DELETE</button>
          </>
        ) : (
          <>
            <button className="btn-save" onClick={handleEdit}>SAVE</button>
            <button className="btn-cancel" onClick={() => setIsEditing(false)}>CANCEL</button>
          </>
        )}
      </div>
    </>
  );
};

export default TodoItem;
