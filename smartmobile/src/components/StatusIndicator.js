import React, { useState, useEffect } from "react";

const StatusIndicator = () => {
  const [status, setStatus] = useState("استعداد");

  useEffect(() => {
    const timer = setInterval(() => setStatus(prev => (prev === "يعمل" ? "استراحة" : "يعمل")), 5000);
    return () => clearInterval(timer);
  }, []);

  return <div className="status-indicator">{status}</div>;
};

export default StatusIndicator;
