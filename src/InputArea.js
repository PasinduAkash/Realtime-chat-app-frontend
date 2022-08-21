import React, { useState } from "react";
import "./InputArea.css";
import SendIcon from "@mui/icons-material/Send";
import axios from "./axios";
import { UserAuth } from "./context/AuthContext";

export default function InputArea() {
  const { user } = UserAuth();
  const [messageToSend, setMessageToSend] = useState("");

  const timeStamp = () => {
    const date = new Date().toLocaleDateString();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    const timeStamp = `${date}, ${hours}:${minutes}`;
    return timeStamp;
  };

  const handleChange = (e) => {
    setMessageToSend(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToBeSent = {
      name: user.displayName,
      message: messageToSend,
      timeStamp: timeStamp(),
    };

    axios
      .post("/api/messages/new", dataToBeSent)

      .catch((error) => console.log(error));

    setMessageToSend("");
  };

  return (
    <div className="input-box">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="message-input"
          type="text"
          placeholder="Message"
          value={messageToSend}
        ></input>
        <div className="send-button-box">
          <button type="submit">
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
