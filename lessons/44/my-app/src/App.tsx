import React, { useEffect } from 'react';
import styles from './App.module.css';
import TodoContainer from 'containers/TodoContainer';
import { store } from 'redux/store';

function App() {
  useEffect(() => {
    store.subscribe(() => {
      localStorage.setItem(
        'items',
        JSON.stringify(store.getState().todos.items)
      );
      localStorage.setItem(
        'filter',
        JSON.stringify(store.getState().todos.filter)
      );
    });
  }, []);

  return (
    <div className={styles.App}>
      <TodoContainer />
    </div>
  );
}

export default App;
