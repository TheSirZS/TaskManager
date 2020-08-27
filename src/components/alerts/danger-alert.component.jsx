import React from 'react'

export const DangerAlert = ({ message }) => {
  return (
    <div className={"alert-layout mb-10 p-2"}>
      <div className="alert alert-danger animate__animated animate__bounce" role="alert">
        {message}
      </div>
    </div>
  )
}
