import React from "react";

import { useForm } from "../../hooks/use.form.hook";

import { Actions } from "./actions.component";

import { Firebase } from "../../config/firebase";

export const Login = ({ successAuth, setPage, showAlert }) => {
  const [formState, setFormState] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formState;
    Firebase.signIn(email, password).then((response) => {
      if (response) {
        setTimeout(() => {
          successAuth();
        }, 1000);
      }
    }).catch((e) => showAlert(e.message));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={"card bg-secondary p-2 animate__slideInRight"}>
      <div className={"row justify-content-between"}>
        <div className={"col-12"}>
          {Object.keys(formState).map((key, i) => (
            <div className={"form-group mb-4"} key={i}>
              <input
                value={formState[key]}
                onChange={(e) => setFormState(e)}
                type={i === 0 ? "email" : "password"}
                name={key}
                className={"form-control"}
                placeholder={i === 0 ? "E-Mail" : "Password"}
                autoComplete={"off"}
              />
            </div>
          ))}
        </div>
        <div className={"col-12"}>
          <hr className={"bg-light"} />
        </div>
        <div className={"col-12"}>
          <button type={"submit"} className={"btn btn-outline-light btn-block"}>
            {"Login"}
          </button>
        </div>
        <div className={"col-12"}>
          <Actions text={"If you do not have an account, create one"} handle={() => setPage()} />
        </div>
      </div>
    </form>
  );
};
