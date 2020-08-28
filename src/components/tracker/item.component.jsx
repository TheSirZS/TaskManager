import React from "react";

import { ItemActions } from "../actions/item-actions.component";

import { getTimestamp } from "../../helpers/functions.helper";

export const Item = ({ task, index, deleteTaskById, editTask }) => {
  return (
    <li className={index % 2 === 0 ? "list-group-item bg-dark" : "list-group-item bg-secondary"}>
      <div className={"row justify-content-between"}>
        <div className={"col-9"}>
          <h4 className={"text-light"}>{task.task}</h4>
            <span className={"text-light"}>{"Task finished: " + getTimestamp(task.createdAt)}</span>
        </div>
        <div className={"col-3"}>
          <ItemActions task={task} deleteTaskById={deleteTaskById} editTask={editTask} />
        </div>
      </div>
    </li>
  );
};
