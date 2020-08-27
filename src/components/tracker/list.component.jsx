import React from 'react'
import PropTypes from 'prop-types';

export const List = ({ tasks }) => {
  return (
    <ul className={"list-group mt-4 animate__animated animate__slideInRight"}>
        {tasks.map(({task, time}, i) => (
          <li key={i} className={"list-group-item"}>
            <span>{task}</span>
          </li>
        ))}
    </ul>
  )
}

List.propTypes = {
  tasks: PropTypes.array.isRequired
}
