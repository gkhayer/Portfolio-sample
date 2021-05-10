import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setShow] = useState('block');

  const handleTitle = (e) => {
    // const value = e.target.value
    // const name = e.target.name

    // object deconstructing

    const { value, name } = e.target;

    setNote((prevData) => {
      return {
        ...prevData, [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const shrinkNote = () => {
    setShow('none')
  }

  const bToNormal = () => {
    setShow('block')
  }

  return (
    <>
      <div className="container customNoteContainer">
        <div className="row">
          <form className="notes_main_div">
            <input
              className="removeMargin"
              type="text"
              placeholder="Title"
              autoComplete="off"
              onChange={handleTitle}
              onClick={bToNormal}
              value={note.title}
              name="title"
            />
            <textarea
              className="removeMargin"
              row=""
              column=""
              placeholder="Write a note..."
              onChange={handleTitle}
              onDoubleClick={shrinkNote}
              value={note.content}
              name="content"
              style={{display: expand}}
            ></textarea>

            <Button
              variant="contained"
              className="NoteButton"
              onClick={addEvent}
              onDoubleClick={shrinkNote}
              style={{display: expand}}
            >
              <AddCircleRoundedIcon />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
