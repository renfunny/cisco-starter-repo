import React, { useState, useEffect } from "react";

function Address(props) {
  const [ipAddress, setIpAddress] = useState("Loading...");

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip));
  }, [props.url]);
  return <div className="address-text">{ipAddress}</div>;
}

export default Address;
