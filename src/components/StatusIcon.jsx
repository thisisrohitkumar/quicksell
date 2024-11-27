import React from "react";

const StatusIcon = ({ status }) => {
  switch (status) {
    case "In Progress":
      return <img src="./assets/icons/in-progress.svg" alt="in progress" />;
    case "Todo":
      return <img src="./assets/icons/To-do.svg" alt="todo" />;
    case "Backlog":
      return (
        <img src="./assets/icons/Backlog.svg" alt="backlog" />
      );
    case "Done":
      return <img src="./assets/icons/Done.svg" alt="done" />;
    case "Canceled":
      return <img src="./assets/icons/Canceled.svg" alt="canceled" />;
    default:
      return <></>;
  }
};

export default StatusIcon;
