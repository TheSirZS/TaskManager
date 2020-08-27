import React from "react";

export const FormActions = ({ tracking, resetCounter, paused, setPaused }) => {
  return (
    <div className={"row"}>
      {!tracking ? (
        <div className={"col-12"}>
          <button type={"submit"} className={"btn btn-success btn-block"}>
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              className="bi bi-caret-right"
              fill="#FFF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <React.Fragment>
          <div className={"col-4"}>
            <button type={"submit"} className={"btn btn-danger btn-block"}>
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-stop"
                fill="#FFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"
                />
              </svg>
            </button>
          </div>
          <div className={"col-4"}>
            <button
              onClick={() => setPaused(!paused)}
              type={"button"}
              className={
                !paused ? "btn btn-info btn-block" : "btn btn-success btn-block"
              }
            >
              {!paused ? (
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  className="bi bi-pause-fill"
                  fill="#FFF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                </svg>
              ) : (
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  className="bi bi-caret-right"
                  fill="#FFF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={"col-4"}>
            <button
              onClick={() => resetCounter()}
              type={"button"}
              className={"btn btn-warning btn-block"}
            >
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-counterclockwise"
                fill="#FFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.83 6.706a5 5 0 0 0-7.103-3.16.5.5 0 1 1-.454-.892A6 6 0 1 1 2.545 5.5a.5.5 0 1 1 .91.417 5 5 0 1 0 9.375.789z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.854.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 1 0 .708-.708L5.707 3 7.854.854a.5.5 0 0 0 0-.708z"
                />
              </svg>
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
