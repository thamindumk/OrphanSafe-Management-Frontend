import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Col } from "react-bootstrap";

const App = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    }
  }, [navigate, userInfo]);

  return userInfo ? (
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
  ) : (
    <div className="col text-center pt-5">
      <img
        src="/app-icon.png"
        alt=""
        style={{ height: "50px", width: "50px", marginBottom: "30px" }}
      />
      <h5>Redirecting, Please wait...</h5>
    </div>
  );
};

export default App;
