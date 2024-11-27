import React, {useContext} from "react";
import Card from "./Card";
import TaskHeader from "./TaskHeader";
import { TaskContext } from "../context/TaskContext";

const Tasks = () => {
  const fetchedData = useContext(TaskContext);
  console.log(fetchedData);
  return (
    <>
      <div className="tasks__container">
        <div className="tasks">
          <TaskHeader priority={0} title={"No Priority"} count={2} />
          <Card status={"Done"} />
          <Card status={"Backlog"} />
        </div>
        <div className="tasks">
          <TaskHeader priority={4} title={"Urgent"} count={1} />
          <Card status={"In Progress"} />
        </div>
        <div className="tasks">
          <TaskHeader priority={3} title={"High"} count={3} />
          <Card status={"Done"} />
          <Card status={"In Progress"} />
          <Card status={"Canceled"} />
        </div>
        <div className="tasks">
          <TaskHeader priority={2} title={"Medium"} count={2} />
          <Card status={"Backlog"} />
          <Card status={"Todo"} />
        </div>
        <div className="tasks">
          <TaskHeader priority={1} title={"Low"} count={2} />
          <Card status={"In Progress"} />
          <Card status={"Done"} />
        </div>
      </div>
    </>
  );
};

export default Tasks;
