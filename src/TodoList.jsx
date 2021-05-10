import React, { useState } from "react";
import TodoListItems from "./TodoListItems";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

const TodoList = () => {
  const [list, addList] = useState("");
  const [items, setItems] = useState([]);

  const SaveValue = (e) => {
    addList(e.target.value);
  };

  const displayValue = () => {
    setItems((oldItems) => {
      return [...oldItems, list];
    });

    addList("");
  };

  const deleteItem = (id) => {
    console.log("deleted", id);
    //delete krna hai toh use filter function

    setItems((olditems) => {
      return olditems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <h1 className="heading_style">Todo List 🎞️</h1>
      <div className="main-div">
        <div className="listCard">
          <h1 className="todoHeading">ToDo List</h1>
          <br />
          <input
            className="AddItemInput"
            type="text"
            placeholder="Add a item"
            name="list"
            value={list}
            onChange={SaveValue}
          />
          <Tooltip title="Add">
            <Button onClick={displayValue} className="btn-green">
              <AddIcon />
            </Button>
          </Tooltip>
          <ol className="listitem">
            {/* 1st current value, index of current value ,  array name, this*/}
            {items.map((item, index) => {
              return (
                <TodoListItems
                  key={index}
                  id={index}
                  listInfo={item}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoList;
