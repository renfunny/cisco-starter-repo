import React, { useState, useEffect } from "react";

function Address(props) {
  const [ipAddress, setIpAddress] = useState("null");
  const url = `${props.url}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
        console.log(url, data.ip);
      });
  }, [url]);
  return <div className="address-text">{ipAddress}</div>;
}

export default Address;
