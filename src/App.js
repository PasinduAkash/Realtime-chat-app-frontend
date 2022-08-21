import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import "./App.css";
import Protected from "./Protected";
import Username from "./Username";
import ChatArea from "./ChatArea";
import InputArea from "./InputArea";
import SignIn from "./SignIn";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/messages/sync")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const pusher = new Pusher(process.env.REACT_APP_CLIENT_ID, {
      cluster: process.env.REACT_APP_CLUSTER,
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      setData((prev) => [...prev, data]);
    });
  }, []);

  return (
    <AuthContextProvider>
      <Routes>
        <Route
          path="/"
          element={
            <div className="signin-home">
              <SignIn />
            </div>
          }
        />
        <Route
          path="/chatroom"
          element={
            <Protected>
              <div className="App">
                <Username />
                <ChatArea data={data} />
                <InputArea />
              </div>
            </Protected>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
