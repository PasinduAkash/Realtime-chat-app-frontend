import React from "react";

export default function ChatBox() {
  return (
    <div className="message-card">
      <p className="message">Hey there hows it going</p>
      <p className="timestamp">{`${hours}:${minutes}`}</p>
    </div>
  );
}
