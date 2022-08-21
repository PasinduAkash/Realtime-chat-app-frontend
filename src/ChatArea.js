import React from "react";
import "./ChatArea.css";
import Card from "./Card";

export default function ChatArea(props) {
  return (
    <div className="chat-area">
      {props.data.map((item, index) => {
        return (
          <Card
            key={index}
            msg={item.message}
            name={item.name}
            timeStamp={item.timeStamp}
          />
        );
      })}
    </div>
  );
}
