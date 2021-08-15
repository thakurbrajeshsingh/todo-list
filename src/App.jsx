import React, { useState } from "react";
import TodoLists from "./TodoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return index !== id;
      })
    })
  };
  const clearAll = () =>{
    setItems([]);
  }

  return (
    <div className="wrapper">
      <header>Todo App</header>
      <div className="inputField">
        <input
          type="text"
          placeholder="Add your new todo"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItem}>
          <i className="fas fa-plus" />
        </button>
      </div>

      <ul className="todoList">
        {Items.map((itemval, index) => {
          return (
            <TodoLists
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItem}
            />
          );
        })}
      </ul>
      <div className="footer">
        <span>
          You have <span className="pendingTasks"></span> pending tasks
        </span>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
};

export default App;
