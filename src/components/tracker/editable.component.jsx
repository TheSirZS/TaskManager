import React from "react";

import { useForm } from "../../hooks/use.form.hook";

import { EditableActions } from "../actions/editable-actions.component";

export const Editable = ({ index, task, cancel, handleUpdate }) => {

  const [formState, setFormState] = useForm({
    task: task.task,
    time: task.currentTime,
  });
  
  const editTask = (e) => {
    e.preventDefault()
    let updated = {
      userId: task.userId,
      task: formState.task,
      startedTime: task.startedTime,
      currentTime: formState.time,
      createdAt: Date.now(),
    };
    handleUpdate(task.id, updated)
  }

  return (
    <form
      onSubmit={(e) => editTask(e)}
      className={
        index % 2 === 0
          ? "card p-2 bg-dark"
          : "card p-2 bg-secondary"
      }
    >
      <div className={"row justify-content-between"}>
        <div className={"col-9"}>
          <div className={"row"}>
            {Object.keys(formState).map((key, i) => (
              <div className={i === 0 ? "col-9" : "col-3"} key={i}>
                <div className={"form-group"} key={i}>
                  <input
                    value={formState[key]}
                    onChange={(e) => setFormState(e)}
                    type={i === 0 ? "name" : "time"}
                    name={key}
                    className={"form-control"}
                    placeholder={i === 0 ? "What are you working today?" : ""}
                    autoComplete={"off"}
                    max={i === 1 ? "02:00:00" : ""}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={"col-3"}>
          <EditableActions cancel={cancel} />
        </div>
      </div>
    </form>
  );
};
