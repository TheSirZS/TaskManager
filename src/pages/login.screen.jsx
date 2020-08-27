import React from 'react'

export const LoginScreen = ({ history }) => {

  const handleLogin = () => {
    history.push('/')
  }

  return (
    <div className={"container-xl vh-100"}>
      <h1 className={"text-light"}>Login Screen</h1>
      <hr className={"bg-light"} />
      <div className={"mt-4"}>
        <button onClick={handleLogin} className={"btn btn-outline-light"}>
          {"Sign In"}
        </button>
      </div>
    </div>
  )
}
