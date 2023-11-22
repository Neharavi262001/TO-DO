import React from 'react';

const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder='Add new item'
        value={todo}
        name='to-do'
        onChange={(e) => {
          setTodo(e.target.value, () => {
            console.log(todo); // This will log the updated value
          });
        }}
      />
      <button className='add-button' onClick={addTodo}>+</button>
    </div>
  );
}

export default TodoInput;
