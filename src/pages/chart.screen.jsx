import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { Bar } from "react-chartjs-2";

import { SET_TASKS } from "../redux/actions";

import { Firebase } from "../config/firebase";

const mapStateToProps = (state) => {
  return {
    user: state.state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTasks: (tasks) => {
      dispatch(SET_TASKS(tasks));
    }
  };
};

export const ChartScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  const { user, setTasks } = props;

  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const unsuscribe = Firebase.getTasks().onSnapshot((onSnapshot) => {
      const docs = []
      onSnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      let filter = docs.filter((doc) => doc.userId === user.uid);
      let sort = filter.sort((a, b) =>  new Date(b.createdAt) - new Date(a.createdAt))
      setTasks(sort);
      let labels = sort.map((doc) => doc.task)
      let data = sort.map((doc) => new Date(doc.createdAt).getDate())
      setData({
        labels: labels,
        datasets: [{
            label: 'Created At Day: ',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      })
    });

    return () => {
      unsuscribe();
    };
  }, [user.uid, setTasks])

  return (
    <div
      className={"container-xl mt-5 vh-100 animate__animated animate__fadeIn"}
    >
      <h1 className={"text-light"}>Chart Screen</h1>
      <hr className={"bg-light"} />
      <div className="row justify-content-center">
        <div className={"col animate__animated animate__slideInRight"}>
          <Bar data={data} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
});
