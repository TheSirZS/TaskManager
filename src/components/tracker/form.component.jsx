import React, { useState } from "react";

import { useForm } from "../../hooks/use.form.hook";

import { Countdown } from "./countdown.component";
import { FormActions } from "../actions/form-actions.component";

export const Form = ({ addTask }) => {
  const [tracking, setTracking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [counter, setCounter] = useState({
    hours: parseInt(0),
    minutes: parseInt(0),
    seconds: parseInt(0)
  });
  const [formState, setFormState, reset] = useForm({
    task: "",
    time: "00:00:00",
  });

  const startTracking = (e) => {
    e.preventDefault();
    const { task, time } = formState;
    if (task.toString().length >= 5 && time.toString()) {
      let hours = time.split(':')[0], minutes = time.split(':')[1], seconds = time.split(':')[2].split(' ')[0];
      setCounter({
        hours: parseInt(hours), minutes: parseInt(minutes), seconds: parseInt(seconds)
      })
      setTracking(!tracking);
    }
  };

  const finishTracking = (e) => {
    e.preventDefault();
    setTracking(!tracking);
    const { task, time } = formState;
    let newTask = {
      task: task,
      time: time,
      createdAt: Date.now(),
    };
    addTask(newTask);
    reset();
  };

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
      className={"card bg-secondary p-2"}
      onSubmit={(e) => (!tracking ? startTracking(e) : finishTracking(e))}
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
        />
      )}
    </form>
  );
};
