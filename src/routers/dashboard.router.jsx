import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "../data/routes";

import { Navbar } from "../components/navigation/navbar.component";
import { Sidebar } from "../components/navigation/sidebar.component";
import { Modal } from "../components/modal/modal.component";

import { ModalContext } from "../helpers/contexts.helper";

export const DashboardRouter = () => {

  const [modal, setModal] = useState({
    active: false,
    sucess: () => {},
    cancel: () => {}
  })

  const show = () => setModal({...modal, active: !modal.active})

  return (
    <ModalContext.Provider value={{ modal, setModal, show }}>
      {modal.active && (
        <Modal 
          show={show}
          sucess={modal.sucess}
          cancel={modal.cancel}
        />
      )}
      <Navbar />
      <div className={"container-fluid"}>
        <div className={"row"}>
          <Sidebar routes={routes} />
          <main className={"col-md-9 ml-sm-auto col-lg-10 px-md-4"}>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} exact path={route.pathname} component={route.component} />
              ))}
            </Switch>
          </main>
        </div>
      </div>
    </ModalContext.Provider>
  );
};
