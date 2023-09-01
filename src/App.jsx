import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Col } from "react-bootstrap";
import { useLocation } from "react-router-dom"; // Import useLocation

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

  const location = useLocation(); // Get the current location
  const path = location.pathname; // Extract the pathname

  let pageTitle = "Default Title"; // Default title

  // Define a mapping of paths to titles
  const pathToTitleMap = {
    "/": "Home",
    "/home": "Home Page",
    "/dashboard":"Dashboard",
    "/monitoring/viewStaff":"View staff profiles",
    "/monitoring/viewSocialWorker":"View social worker profiles",
    "/monitoring/viewParent": "View parent profiles",
    "/profile/createProfile": "Create child profile Form",
    "/userRole/createStaff":"Create staff Form",
    "/userRole/createParent": "Create parent Form",
    "/userRole/createSocialWorker":"Create social worker Form"

    // Add more path-title mappings as needed
  };
// Check if the path exists in the mapping, and if so, set the pageTitle accordingly
  if (path in pathToTitleMap) {
    pageTitle = pathToTitleMap[path];
  }

  return userInfo ? (
    <>
      <Header />
      <Sidebar />
      <section className="main-container-section">
        <div className="container">
          <section>
            <div className="page-main-header">{pageTitle}</div>
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
