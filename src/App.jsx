import React, { useState } from 'react';




const App = () =>{

const [inputList,setInputList]=useState("Buy Apple");
const itemEvent = (event) =>{
    let todo = event.target.value;
    setInputList(todo); 
}

return(

    <div className="wrapper">
    <header>Todo App</header>
    <div className="inputField">
      <input type="text" placeholder="Add your new todo" onChange={itemEvent}/>
      <button><i class="fas fa-plus" /></button>
    </div>
    <ul className="todoList" />
      {/* <!-- data are comes from local storage --> */}
    <li>{inputList}</li>
    <ul />
    <div className="footer">
      <span>You have <span className="pendingTasks"></span> pending tasks</span>
      <button>Clear All</button>
    </div>
  </div>
    
    
)
}

export default App;