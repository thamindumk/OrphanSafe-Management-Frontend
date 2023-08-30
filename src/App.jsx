import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <section className="main-container-section">
        <div className="container">
          <section>
            <div className="page-main-header">Title</div>
            <div className="page-sub-header">
              Select the features provided by the Evision Cloud Platform.
            </div>
          </section>
          <section className="mt-3 main-page-content">
            <Outlet />
          </section>
        </div>
      </section>
    </>
  );
};

export default App;
