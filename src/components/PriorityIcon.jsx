import React from "react";

const PriorityIcon = ({ priority }) => {
  switch (priority) {
    case 0:
      return <img src="./assets/icons/No-Priority.svg" alt="no priority" />;
    case 1:
      return <img src="./assets/icons/Low-Priority.svg" alt="low priority" />;
    case 2:
      return <img src="./assets/icons/Medium-priority.svg" alt="medium priority" />;
    case 3:
      return <img src="./assets/icons/High-Priority.svg" alt="high priority" />;
    case 4:
      return <img src="./assets/icons/Urgent-Priority-colour.svg" alt="Urgent priority" />;
    default:
        return <></>;
  }
};

export default PriorityIcon;
