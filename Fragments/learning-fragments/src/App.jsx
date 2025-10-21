import React from 'react';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import foodItems from './const/data';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems}/>
      <FoodItems items={foodItems}/>
    </>
  )
}

export default App
