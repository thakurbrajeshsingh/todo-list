import React from "react";

const TodoLists = (props) => {

  return (
    <div className="todo_list">
      <i className="fa fa-times" aria-hidden="true"
       onClick={()=>{
           props.onSelect(props.id);
       }} />
      <li> {props.text} </li>
    </div>
  );
};

export default TodoLists;
