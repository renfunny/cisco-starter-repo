import React, { useState, useEffect } from "react";

function Latency() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:55455");

    ws.onopen = () => {
      console.log("WebSocket Client Connected");
      startLatencyMeasurement(ws);
    };

    //The server responds to the client's message with a timestamp. The client can then calculate the latency by subtracting the current time from the timestamp.
    ws.onmessage = (event) => {
      const currentTime = Date.now();
      const timeStamp = parseInt(event.data);
      const latency = currentTime - timeStamp;
      setLatency(latency);
    };

    ws.onclose = () => {
      console.log("WebSocket Client Disconnected");
      clearInterval(intervalId);
    };

    const intervalId = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        startLatencyMeasurement(ws);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      if (
        ws.readyState === WebSocket.OPEN ||
        ws.readyState === WebSocket.CONNECTING
      ) {
        ws.close();
      }
    };
  }, []);
  // This function is called when the WebSocket connection is established, and every second thereafter. It sends a message to the server, which the server will respond to with a timestamp.
  const startLatencyMeasurement = (ws) => {
    ws.send("Start latency measurement");
  };
  return <div className="latency-text">{latency} ms</div>;
}

export default Latency;
