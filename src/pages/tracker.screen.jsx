import React from "react";

import { connect } from "react-redux";

import { ADD_TASK } from "../redux/actions/index";

import { Form } from "../components/tracker/form.component";
import { List } from "../components/tracker/list.component";

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
  return (
    <div className={"container-xl mt-5 vh-100"}>
      <h1 className={"text-light"}>Tracker Screen</h1>
      <div className={"row"}>
        <div className={"col"}>
          <Form addTask={addTask} />
          <List tasks={tasks} />
        </div>
      </div>
    </div>
  );
});
