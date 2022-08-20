import React from 'react';
import './App.css';
import Dine from './new.js';

function App() {
  return (
    <div className="App">
      <h1>Hello there. How are you now. </h1>
      <Dine dishName=" Pizza" sweetDish="Kheer"/>
      <Dine dishName=" Karahi" sweetDish="Custard"/>
      <Dine dishName=" Nihari" sweetDish="Mithai"/>
    </div>
  );
}

export default App;