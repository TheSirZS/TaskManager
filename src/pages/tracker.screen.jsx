import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { ADD_TASK } from "../redux/actions/index";

import { Form } from "../components/tracker/form.component";
import { List } from "../components/tracker/list.component";
import { SuccessAlert } from "../components/alerts/success-alert.component";

const mapStateToProps = (state) => {
  return {
    tasks: state.state.tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      dispatch(ADD_TASK(task));
    }
  };
};

export const TrackerScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const { tasks, addTask } = props;

  const [alert, setAlert] = useState({ status: false, message: "" });

  const showAlert = (message) => setAlert({ status: true, message: message });

  useEffect(() => {
    if (alert.status) {
      setTimeout(() => {
        setAlert({ status: false, message: '' })
      }, 3000)
    }
  }, [alert.status])

  return (
    <div className={"container-xl mt-5 vh-100 animate__animated animate__fadeIn"}>
      <h1 className={"text-light"}>Tracker Screen</h1>
      <hr className={"bg-light"} />
      <div className={"row"}>
        <div className={"col"}>
          <Form addTask={addTask} showAlert={showAlert} />
          <List tasks={tasks} />
        </div>
      </div>
      {alert.status && <SuccessAlert message={alert.message} />}
    </div>
  );
});
