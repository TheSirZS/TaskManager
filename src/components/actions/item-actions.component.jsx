import React from "react";

import { SVGEdit, SVGDelete } from "../svg/svg.component";

export const ItemActions = ({ task, deleteTaskById, editTask }) => {
  return (
    <div className={"row justify-content-end"}>
      <div className={"col-6"}>
        <h4 className={"text-light"}>{task.currentTime}</h4>
        <span
          className={
            task.currentTime === "00:00:00"
              ? "text-light bg-success p-1 rounded"
              : "text-light bg-warning p-1 rounded"
          }
        >
          {task.currentTime === "00:00:00" ? "Completed" : "Pending"}
        </span>
      </div>
      <div className={"col-6"}>
        <div className={"row"}>
          <div className={"col-6"}>
            <button onClick={editTask} type={"submit"} className={"btn btn-success btn-block"}>
              <SVGEdit color={"#FFF"} />
            </button>
          </div>
          <div className={"col-6"}>
            <button
              onClick={() => deleteTaskById(task.id)}
              type={"button"}
              className={"btn btn-danger btn-block"}
            >
              <SVGDelete color={"#FFF"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
