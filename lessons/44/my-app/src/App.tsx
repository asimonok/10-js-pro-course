import React, { useEffect } from 'react';
import './App.css';
import TodoContainer from 'containers/TodoContainer';
import { store } from 'redux/store';

function App() {
  useEffect(() => {
    store.subscribe(() => {
      localStorage.setItem(
        'items',
        JSON.stringify(store.getState().todos.items)
      );
    });
  }, []);

  return (
    <div className="App">
      <TodoContainer />
    </div>
  );
}

export default App;
