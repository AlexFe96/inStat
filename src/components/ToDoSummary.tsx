import React from 'react';
import { inject, observer } from 'mobx-react';
import ToDoStore from '../stores/TodoStore';

type TToDoSummaryProps =
  {
    toDoStore?: ToDoStore
  }
  
const ToDoSummary: React.FC<TToDoSummaryProps> = inject(({ toDoStore }) => ({ toDoStore }))(observer(({ toDoStore }) => {
  const totalToDos = toDoStore?.ToDos.length || 0;
  const completedToDos = toDoStore?.ToDos.filter(x => x.isCompleted).length || 0;
  
  return (
    <section>
      ToDo status {totalToDos - completedToDos} ToDo(s) pending from{' '}
      {totalToDos} ToDo(s)
    </section>
  );
}));
  
export default ToDoSummary;
