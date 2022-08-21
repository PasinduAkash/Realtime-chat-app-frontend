import React, { useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { GoogleButton } from "react-google-button";
import "./SignIn.css";
import { UserAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/chatroom");
    }
  }, [user]);

  return (
    <div className="signin-page">
      <h1 className="signin-title">Sign in to WhatsApp Clone</h1>
      <WhatsAppIcon className="whatsapp-icon" />
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
}

export default SignIn;
