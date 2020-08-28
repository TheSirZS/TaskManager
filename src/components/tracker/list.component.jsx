import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Item } from "./item.component";
import { Header } from "./header.component";
import { Filter } from "./filter.component";
import { Editable } from "./editable.component";

import { ModalContext } from "../../helpers/contexts.helper";

export const List = ({ tasks, updateTask, deleteTask }) => {
  const { setModal, show } = useContext(ModalContext);

  const [filter, setFilter] = useState(false);
  const [filters, setFilters] = useState({
    value: "Short: 30 min or less",
    items: [
      "Short: 30 min or less",
      "Medium: 30 min to 1h",
      "Long: more than 1h",
    ],
  });
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (tasks.length > 0) {
      let map = tasks.map((item) => ({...item, checked: false}))
      setResults(map);
    }
  }, [tasks]);

  const cancel = () => {
    setFilter(!filter);
    setResults(tasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = tasks.filter((item) => {
      if (filters.value === filters.items[0]) {
        let max = "00:30:00";
        return item.currentTime < max;
      } else if (filters.value === filters.items[1]) {
        let min = "00:30:00";
        let max = "01:00:00";
        return item.currentTime > min && item.currentTime < max;
      } else {
        let max = "01:00:00";
        return item.currentTime > max;
      }
    });
    let map = data.map((item) => ({...item, checked: false}))
    setResults(map);
  };

  const deleteTaskById = (id) => {
    show();
    setModal((prev) => ({
      ...prev,
      title: "Delete Task",
      body: "Do you want to delete this task?",
      sucess: () => deleteTask(id),
    }));
  };

  const editTask = (index) => {
    const data = [...results];
    data[index].checked = !data[index].checked
    setResults(data)
  };

  return (
    <ul
      className={
        "list-group mt-4 animate__animated animate__slideInRight animate__delay-1s"
      }
    >
      {!filter ? (
        <Header handle={() => cancel()} />
      ) : (
        <Filter
          filters={filters}
          setFilters={setFilters}
          handleSubmit={handleSubmit}
          cancel={cancel}
        />
      )}
      {results.map((task, i) =>
        !task.checked ? (
          <Item
            key={i}
            task={task}
            index={i}
            deleteTaskById={deleteTaskById}
            editTask={() => editTask(i)}
          />
        ) : (
          <Editable
            key={i}
            task={task}
            index={i}
            cancel={() => editTask(i)}
            handleUpdate={updateTask}
          />
        )
      )}
    </ul>
  );
};

List.propTypes = {
  tasks: PropTypes.array.isRequired,
};
