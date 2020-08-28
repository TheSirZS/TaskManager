import React from "react";

export const Header = ({ handle }) => {
  return (
    <div className={"row justify-content-between mb-2"}>
      <div className={"col-10"}>
        <h3 className={"text-light"}>{"Last updates"}</h3>
      </div>
      <div className={"col-2"}>
        <button onClick={handle} type={"button"} className={"btn btn-outline-light btn-block"}>
          {"Filter"}
        </button>
      </div>
    </div>
  );
};
