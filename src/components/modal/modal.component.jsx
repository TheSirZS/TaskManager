import React from "react";
import { SVGCancel } from "../svg/svg.component";

export const Modal = ({ show, title, body, sucess, cancel }) => {
  return (
    <div
      className="modal-layout"
    >
      <div className="modal-dialog animate__animated animate__zoomIn">
        <div className="modal-content bg-secondary">
          <div className="modal-header">
            <h5 className="modal-title text-light">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                cancel()
                show()
              }}
            >
              <SVGCancel color={"#FFF"} />
            </button>
          </div>
          <div className="modal-body text-light">{body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={() => {
                cancel()
                show()
              }}
            >
              Cancel
            </button>
            <button onClick={() => {
              sucess()
              show()
            }} type="button" className="btn btn-success">
              Finish 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
