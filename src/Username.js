import React from "react";
import "./Username.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserAuth } from "./context/AuthContext";

export default function Username() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="username-box">
      <AccountCircleIcon />
      {user?.displayName ? (
        <h1 className="profile-name" onClick={handleSignOut}>
          {user.displayName}
        </h1>
      ) : (
        <h1 className="profile-name">Whatsapp Clone</h1>
      )}
    </div>
  );
}
