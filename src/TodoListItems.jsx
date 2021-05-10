import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoListItems = (props) => {

  const [line, setLine] = useState(false)

  const cutIt = () => {
    setLine(true)
  }

  return (
    <>
      {/* <div>
        <li>
          <Tooltip title="Delete">
            <Button
              onClick={() => props.onSelect(props.id)}
              className="btn-red"
            >
              <DeleteIcon />
            </Button>
          </Tooltip>
          {props.listInfo}
        </li>
      </div> */}
      <div className="toDoCutIt__Style" style={{textAlign: 'left'}}>
        <span onClick={cutIt}>
          <DeleteIcon className="btn-red"/>
        </span>
        <li style={{textDecoration: line ? 'line-through' : 'none'}}>{props.listInfo}</li>
      </div>
    </>
  );
};

export default TodoListItems;
