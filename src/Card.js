import React from "react";
import "./Card.css";
import { UserAuth } from "./context/AuthContext";

export default function Card(props) {
  const { user } = UserAuth();

  return (
    <div
      className={
        user.displayName === props.name
          ? "message-card message-sent"
          : "message-card"
      }
    >
      <p className="message">{props.msg}</p>
      <p className="timestamp">{`${props.name}, ${props.timeStamp}`}</p>
    </div>
  );
}
