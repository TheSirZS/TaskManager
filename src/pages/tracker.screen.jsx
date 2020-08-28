import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { Form } from "../components/tracker/form.component";
import { List } from "../components/tracker/list.component";
import { SuccessAlert } from "../components/alerts/success-alert.component";

import { Firebase } from "../config/firebase";

import { SET_TASKS } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.state.user,
    tasks: state.state.tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTasks: (tasks) => {
      dispatch(SET_TASKS(tasks));
    }
  };
};

export const TrackerScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const { user, tasks, setTasks } = props;

  const [alert, setAlert] = useState({ status: false, message: "" });

  const showAlert = (message) => setAlert({ status: true, message: message }); 

  useEffect(() => {
    const unsuscribe = Firebase.getTasks().onSnapshot((onSnapshot) => {
      const docs = []
      onSnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      let filter = docs.filter((doc) => doc.userId === user.uid);
      let sort = filter.sort((a, b) =>  new Date(b.createdAt) - new Date(a.createdAt))
      setTasks(sort);
    });

    return () => {
      unsuscribe();
    };
  }, [user.uid, setTasks])

  useEffect(() => {
    if (alert.status) {
      setTimeout(() => {
        setAlert({ status: false, message: '' })
      }, 3000)
    }
  }, [alert.status])

  const addTask = (task) => Firebase.addTask(task);

  const updateTask = (id, task) => Firebase.updateTask(id, task);

  const deleteTask = (id) => Firebase.deleteTask(id);

  return (
    <div className={"container-xl mt-5 vh-100 animate__animated animate__fadeIn"}>
      <h1 className={"text-light"}>Tracker Screen</h1>
      <hr className={"bg-light"} />
      <div className={"row mx-auto"}>
        <div className={"col"}>
          <Form 
            user={user}
            addTask={addTask} 
            showAlert={showAlert} 
          />
          {tasks.length > 0 && (
            <List tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
          )}
        </div>
      </div>
      {alert.status && <SuccessAlert message={alert.message} />}
    </div>
  );
});
