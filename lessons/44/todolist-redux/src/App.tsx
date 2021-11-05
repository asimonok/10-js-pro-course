import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

//TODO
// add new task -- button adding task in list
//input that will be pushed to arr with tasks
//display tasks
//each has button that deletes
//each has button that allows edit
//each has checkbox
//filter tasks -- all --done --ToDo
//button Delete done tasks -- so flag done boolean true(mb false)
//button Delete All tasks -- so empty state with tasks

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state: any) => state.cash);
  console.log(cash);

  return (
    <div className="App">
      <h1>Redux ToDo List {cash}</h1>
    </div>
  );
};

export default App;
