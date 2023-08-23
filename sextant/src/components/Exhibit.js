import React from "react";

function Exhibit(props) {
  return (
    <div className="exhibit">
      <h2 className="exhibit-header">{props.header}</h2>
      <div className="exhibit-body">{props.children}</div>
    </div>
  );
}

export default Exhibit;
