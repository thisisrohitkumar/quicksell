import React from "react";
import StatusIcon from "./StatusIcon";

const Card = (props) => {
  return (
    <>
      <div className="card__container">
        <div className="card__row">
          <div className="card__col">CAM-11</div>
          <div className="card__col">
            <div className="avatar">
              <img src="./assets/icons/avatar.svg" alt="avatar" />
              <span></span>
            </div>
          </div>
        </div>
        <div className="card__row">
          <StatusIcon status={props.status}/>
          Conduct Security Vulnerability Assessment
        </div>
        <div className="card__row">
          <span>
            <span className="card__tag"></span>
            Feature Request
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
