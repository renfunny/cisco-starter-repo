import React from "react";

function Exhibit(props) {
  return (
    <>
      <header>{props.header}</header>
      {props.children}
    </>
  );
}

export default Exhibit;
