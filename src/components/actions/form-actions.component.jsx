import React from "react";

import { SVGStart, SVGStop, SVGPause, SVGReset } from "../svg/svg.component";

export const FormActions = ({ tracking, resetCounter, paused, setPaused }) => {
  return (
    <div className={"row"}>
      {!tracking ? (
        <div className={"col-12"}>
          <button type={"submit"} className={"btn btn-success btn-block"}>
            <SVGStart color={"#FFF"} />
          </button>
        </div>
      ) : (
        <React.Fragment>
          <div className={"col-4"}>
            <button type={"submit"} className={"btn btn-danger btn-block"}>
              <SVGStop color={"#FFF"} />
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
                <SVGPause color={"#FFF"} />
              ) : (
                <SVGStart color={"#FFF"} />
              )}
            </button>
          </div>
          <div className={"col-4"}>
            <button
              onClick={() => resetCounter()}
              type={"button"}
              className={"btn btn-warning btn-block"}
            >
              <SVGReset color={"#FFF"} />
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
