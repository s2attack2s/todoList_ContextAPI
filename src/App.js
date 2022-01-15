import "./App.css";
import React, { useEffect } from "react";
import listTodo from "./components/db/todoList";
import ListTodo from "./components/listContextApi/view/listTodo";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
export const ListContext = React.createContext();
function App() {
  let dataTodo = listTodo;

  return (
    <div className="App">
      <ListContext.Provider value={dataTodo}>
        <ListTodo />
      </ListContext.Provider>
    </div>
  );
}

export default App;
