import React from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import { TGlobalStore } from './types/GlobalStore'
import ToDoStore from './stores/TodoStore';
import ToDoComponent from './components/ToDoComponent';
import ToDoSummary from './components/ToDoSummary';

const AppStore: TGlobalStore = {
  toDoStore: new ToDoStore(),
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider {...AppStore}>
        <ToDoComponent />
        <ToDoSummary />
      </Provider>
    </div>
  );
}

export default App