import React from "react";

function Banner(props) {
  return (
    <div className="banner">
      <h1 className="banner-text">{props.text}</h1>
    </div>
  );
}

export default Banner;
