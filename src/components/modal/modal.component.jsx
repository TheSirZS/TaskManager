import React from "react";

export const Modal = ({show, sucess, cancel}) => {
  return (
    <div
      className="modal-layout animate__zoomIn"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-secondary">
          <div className="modal-header">
            <h5 className="modal-title text-light">
              Complete Task
            </h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                cancel()
                show()
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-light">{"Do you want to finish this task?"}</div>
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
