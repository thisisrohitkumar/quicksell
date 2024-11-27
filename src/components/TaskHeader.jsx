import React from "react";
import PriorityIcon from "./PriorityIcon";

const TaskHeader = (props) => {
  return (
    <>
      <div className="tasks__heading">
        <div className="task__col">
          <PriorityIcon priority={props.priority} />
          <span>{props.title}</span>
          <span style={{"color" : "#999999"}}>{props.count}</span>
        </div>
        <div className="task__col">
          <img src="./assets/icons/add.svg" alt="add" />
          <img src="./assets/icons/3dot.svg" alt="3dot" />
        </div>
      </div>
    </>
  );
};

export default TaskHeader;
