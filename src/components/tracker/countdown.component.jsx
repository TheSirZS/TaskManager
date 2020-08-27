import React, { useEffect } from "react";

export const Countdown = ({ task, counter, setCounter, paused, over, setOver }) => {
  const tick = () => {
    const { hours, minutes, seconds } = counter;
    if (paused || over) return;
    if (hours === 0 && minutes === 0 && seconds === 0) setOver(true);
    else if (minutes === 0 && seconds === 0)
      setCounter({
        hours: hours - 1,
        minutes: 59,
        seconds: 59
      });
    else if (seconds === 0)
      setCounter({
        hours: hours,
        minutes: minutes - 1,
        seconds: 59
      });
    else
      setCounter({
        hours: hours,
        minutes: minutes,
        seconds: seconds - 1
      });
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    }
  });

  return (
    <div className={"row align-items-center justify-content-between mt-4"}>
      <div className={"col-8"}>
        <h3 className={"text-light"}>{"Task Started: " + task}</h3>
      </div>
      <div className={"col-4"}>
        <h3 className={"text-light text-right"}>{`${counter.hours.toString().padStart(2, '0')}:${counter.minutes
          .toString()
          .padStart(2, '0')}:${counter.seconds.toString().padStart(2, '0')}`}</h3>
      </div>
    </div>
  )
}