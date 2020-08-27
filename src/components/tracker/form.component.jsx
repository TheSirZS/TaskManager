import React, { useContext, useState } from "react";

import { useForm } from "../../hooks/use.form.hook";

import { Countdown } from "./countdown.component";
import { FormActions } from "../actions/form-actions.component";
import { ModalContext } from "../../helpers/contexts.helper";

export const Form = ({ addTask, showAlert }) => {

  const { setModal, show } = useContext(ModalContext);

  const [tracking, setTracking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [counter, setCounter] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [formState, setFormState, reset] = useForm({
    task: "",
    time: "00:30:00",
  });

  const startTracking = (e) => {
    e.preventDefault();
    const { task, time } = formState;
    if (task.toString().length >= 5 && time.toString()) {
      resetCounter();
      let hours = time.split(':')[0], minutes = time.split(':')[1], seconds = time.split(':')[2].split(' ')[0];
      setCounter({
        hours: parseInt(hours), minutes: parseInt(minutes), seconds: parseInt(seconds)
      })
      setTracking(true);
    }
  };

  const stopTracking = (e) => {
    e.preventDefault();
    setPaused(true);
    show();
    setModal((prev) => ({ ...prev, sucess: finishTracking, cancel: () => setPaused(false)}))
  };

  const finishTracking = () => {
    setTracking(false);
    const { task, time } = formState;
    let newTask = {
      task: task,
      time: time,
      createdAt: Date.now(),
    };
    addTask(newTask);
    reset();
    showAlert('New task generated successfully')
  }

  const resetCounter = () => {
    const { time } = formState;
    let hours = time.split(':')[0], minutes = time.split(':')[1], seconds = time.split(':')[2].split(' ')[0];
    setCounter({
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    });
    setPaused(false);
    setOver(false);
  };

  return (
    <form
      className={"card bg-secondary p-2 animate__animated animate__slideInRight"}
      onSubmit={(e) => (!tracking ? startTracking(e) : stopTracking(e))}
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
                    max={i === 1 ? '02:00:00' : ''}
                    readOnly={tracking}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={"col-3"}>
          <FormActions 
            tracking={tracking} 
            resetCounter={resetCounter} 
            paused={paused}
            setPaused={setPaused} 
          />
        </div>
      </div>
      {tracking && (
        <Countdown 
          task={formState.task} 
          counter={counter} 
          setCounter={setCounter} 
          paused={paused}
          over={over}
          setOver={setOver}
          finishTracking={finishTracking}
        />
      )}
    </form>
  );
};
