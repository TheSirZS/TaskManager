import React, { useState, useEffect } from "react";

import { Login } from "../components/login/login.component";
import { SignUp } from "../components/login/sign-up.component";
import { DangerAlert } from "../components/alerts/danger-alert.component";

export const LoginScreen = ({ history }) => {
  const [status, setStatus] = useState("login");
  const [alert, setAlert] = useState({ status: false, message: "" });

  const setPage = () => {
    if (status === "login") setStatus("sign-up");
    else setStatus("login");
  };

  const successAuth = () => history.replace("/");

  const showAlert = (message) => setAlert({ status: true, message: message });

  useEffect(() => {
    if (alert.status) {
      setTimeout(() => {
        setAlert({ status: false, message: '' })
      }, 3000)
    }
  }, [alert.status])

  return (
    <div className={"container-xl vh-100 max-w-lg animate__animated animate__fadeIn"}>
      <h1 className={"text-light"}>
        {status === "login" ? "Login" : "Sign-Up"}
      </h1>
      <hr className={"bg-light"} />
      <div className={"w-100 mx-auto"}>
        {status === "login" ? (
          <Login 
            setPage={setPage} 
            successAuth={successAuth}
            showAlert={showAlert} 
          />
        ) : (
          <SignUp 
            setPage={setPage} 
            successAuth={successAuth} 
            showAlert={showAlert} 
          />
        )}
      </div>
      {alert.status && <DangerAlert message={alert.message} />}
    </div>
  );
};
