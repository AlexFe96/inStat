import React from 'react';
import { observer } from 'mobx-react';
import ToDoModel from '../models/ToDoModel';

type TToDoListProps =
  {
    todos: ToDoModel[]
  }

const ToDoList: React.FC<TToDoListProps> = observer(({ todos }) => {
  if (todos.length === 0) {
    return <div>Not Found</div>;
  }
  return (
    <div>
      <h4>My ToDos</h4>
      <div className="todoList">
        <div className="col-md-8">Name</div>
        <div className="col-md-2">IsCompleted</div>
        {todos.map(todo => (
          <div key={todo.ID} className="p-1">
            <div className="todoItem col-md-8">{todo.Title}</div>
            <div className="col-md-2 todoItem">
              {todo.IsCompleted ? (
                <svg
                  width="1.4em"
                  height="1.2em"
                  viewBox="0 0 16 16"
                  className="bi bi-check-circle-fill"
                  fill="green"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                  />
                </svg>
              ) : (
                <svg
                  width="1.4em"
                  height="1.2em"
                  viewBox="0 0 16 16"
                  className="bi bi-x-circle-fill"
                  fill="#fc2222"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    color="white"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
})

export default ToDoList;