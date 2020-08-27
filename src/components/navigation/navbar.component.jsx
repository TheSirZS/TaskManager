import React from "react";

import { Firebase } from "../../config/firebase";

export const Navbar = () => {

  const signOut = () => {
    Firebase.signOut();
  }

  return (
    <nav className={"navbar navbar-expand-sm navbar-dark bg-dark shadow"}>
      <span className={"navbar-brand mb-0 h1"}>{"Workflow Management"}</span>
      <div className={"navbar-collapse collapse w-100 order-3 dual-collapse2"}>
        <ul className={"navbar-nav ml-auto"}>
          <button onClick={() => signOut()} className={"btn"} type={'button'}>
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </ul>
      </div>
    </nav>
  );
};
