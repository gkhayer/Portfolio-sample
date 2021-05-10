import React, { useState } from "react";
import NotesHeader from "./NotesHeader";
import NotesFooter from "./NotesFooter";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Notes = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    //alert("I am clicked");
    // now i have to store note in an array one by one and use map method to disaly <Note />
    // create empty array
    //const [addItem, setAddItem] = useState([])  [ ]because addItem is an array
    // how to store in an array
    setAddItem((OldData) => {
      return [...OldData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((arr, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <h1 className="heading_style">📓 Notes 📓</h1>
      <NotesHeader />
      <div className="main-notes-div">
        <CreateNote passNote={addNote} />
        {addItem.map((item, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
      <NotesFooter />
    </>
  );
};

export default Notes;
