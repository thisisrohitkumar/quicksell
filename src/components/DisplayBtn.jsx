import React, { useState, useEffect, useRef } from "react";

const DisplayBtn = () => {
  const [showChild, setShowChild] = useState(false);
  const parentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (parentRef.current && !parentRef.current.contains(event.target)) {
      setShowChild(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="displaybtn__container"
        ref={parentRef}
        onClick={() => setShowChild((prev) => !prev)}
      >
        <img src="/assets/icons/Display.svg" alt="display" />
        <small>Display</small>
        <img src="/assets/icons/down.svg" alt="down" />
        {showChild && (
          <div
            className="displaybtn__popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="displaybtn__popup__row">
              <div className="displaybtn__popup__col">Grouping</div>
              <div className="displaybtn__popup__col">
                <select name="" id="">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </div>
            <div className="displaybtn__popup__row">
              <div className="displaybtn__popup__col">Ordering</div>
              <div className="displaybtn__popup__col">
                <select name="" id="">
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayBtn;
