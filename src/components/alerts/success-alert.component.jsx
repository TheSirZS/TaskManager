import React from 'react'

export const SuccessAlert = ({ message }) => {
  return (
    <div className={"alert-dashboard mb-10 p-2"}>
      <div className="alert alert-success animate__animated animate__bounce" role="alert">
        {message}
      </div>
    </div>
  )
}
