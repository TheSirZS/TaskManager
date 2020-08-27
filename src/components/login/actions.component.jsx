import React from "react";

export const Actions = ({ text, handle }) => {
  return (
    <div className={"row mt-4"}>
      <div className={"col-10"}>
        <p className={"text-light"}>{text}</p>
      </div>
      <div className={"col-2"}>
        <button onClick={handle} type={"button"} className={"btn btn-outline-light btn-block"}>
          {"Agree"}
        </button>
      </div>
    </div>
  );
};
