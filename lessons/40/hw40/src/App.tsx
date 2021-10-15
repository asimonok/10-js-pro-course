import React from 'react';
import './App.css';
import Button from './components/Button'
import {ThemeContext, ThemeProvider }from './components/ThemeProvider'


function App() {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
    
  );
}

export default App;
