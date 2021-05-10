import React from "react";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import Button from "@material-ui/core/Button";

const Note = (props) => {
  const deleteSelectedNote = () => {
    return props.deleteItem(props.id);
  };
  return (
    <>
        <div className="note">
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
          <Button className="NoteButton">
            <DeleteOutlineRoundedIcon
              className="deleteNote"
              onClick={deleteSelectedNote}
            />
          </Button>
        </div>
    </>
  );
};

export default Note;
