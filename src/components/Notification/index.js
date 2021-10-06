import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>Prati bolje imaš to </p>
    </div>
  );
};

export default Notification;
