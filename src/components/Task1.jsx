import React from "react";

const Task1 = ({ hideButton, show }) => {
  return <div>{show ? <button onClick={hideButton}>Click</button> : null}</div>;
};

export default Task1;
