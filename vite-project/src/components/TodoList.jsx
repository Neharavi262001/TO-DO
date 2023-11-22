import React from 'react';

const TodoList = ({ todoList, deleteTodo }) => {
  return (
    <>
      {todoList.length > 0 ? (
        <ul className='todo-list'>
          {todoList.map((item, index) => (
            <div className="todo" key={index}>
              <li>{item}</li>
              <button
                className='delete-btn'
                onClick={() => {
                  deleteTodo(item);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No Task Found</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
