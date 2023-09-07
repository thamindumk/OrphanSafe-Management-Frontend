import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";

const Dashboard = () => {
  return (
    <div className="responsive">
      <Row style={{ marginBottom: "10px" }}>
        <Col sm={12} md={6}>
          <MyCard>
            <MyCardHeader>Special Notes</MyCardHeader>
            <MyCardBody>
              <div className="d-flex flex-wrap">
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "10px" }}>Role ID: 1234</div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        Role Name: S.S Kodithuwakku
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      There will be a laptop donation on next week
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "10px" }}>Role ID: 1234</div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        Role Name: S.S Kodithuwakku
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      There will be a laptop donation on next week
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "10px" }}>Role ID: 1234</div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        Role Name: S.S Kodithuwakku
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      There will be a laptop donation on next week
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
              </div>
            </MyCardBody>
          </MyCard>
        </Col>

        <Col sm={12} md={6}>
          <MyCard>
            <MyCardHeader>Overview</MyCardHeader>
            <MyCardBody>
              <div className="d-flex flex-wrap">
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "10px", fontWeight: "900" }}>
                        Account balance
                      </div>
                      <div style={{ fontSize: "12px", color: "#232F3E" }}>
                        LastMonth-12,000
                      </div>
                    </div>
                  </div>
                  <div
                    className="role-container-right d-flex justify-content-end align-items-center"
                    style={{ fontWeight: "700", color: "blue" }}
                  >
                    Rs.65,000
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "10px", fontWeight: "900" }}>
                        Account balance
                      </div>
                      <div style={{ fontSize: "12px", color: "#232F3E" }}>
                        LastMonth-12,000
                      </div>
                    </div>
                  </div>
                  <div
                    className="role-container-right d-flex justify-content-end align-items-center"
                    style={{ fontWeight: "700", color: "blue" }}
                  >
                    Rs.65,000
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "10px", fontWeight: "900" }}>
                        Account balance
                      </div>
                      <div style={{ fontSize: "12px", color: "#232F3E" }}>
                        LastMonth-12,000
                      </div>
                    </div>
                  </div>
                  <div
                    className="role-container-right d-flex justify-content-end align-items-center"
                    style={{ fontWeight: "700", color: "blue" }}
                  >
                    Rs.65,000
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "10px", fontWeight: "900" }}>
                        Account balance
                      </div>
                      <div style={{ fontSize: "12px", color: "#232F3E" }}>
                        LastMonth-12,000
                      </div>
                    </div>
                  </div>
                  <div
                    className="role-container-right d-flex justify-content-end align-items-center"
                    style={{ fontWeight: "700", color: "blue" }}
                  >
                    Rs.65,000
                  </div>
                </div>
              </div>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>

      <Row style={{ marginBottom: "10px" }}>
        <Col sm={12} md={6}>
          <MyCard>
            <MyCardHeader>Pending Cases</MyCardHeader>
            <MyCardBody>
              <div className="d-flex flex-wrap">
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        Parent Name: S.S Kodithuwakku
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      Request a child for foster parent
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        Parent Name: S.S Kodithuwakku
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      Request a child for foster parent
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        Parent Name: S.S Kodithuwakku
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      Request a child for foster parent
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
              </div>
            </MyCardBody>
          </MyCard>
        </Col>

        <Col sm={12} md={6}>
          <MyCard>
            <MyCardHeader>Ongoing Cases</MyCardHeader>
            <MyCardBody>
              <div className="d-flex flex-wrap">
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        Parent Name: S.S Kodithuwakku
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      Child adaption case
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        Parent Name: S.S Kodithuwakku
                      </div>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      Child adaption case
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
              </div>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>

      <Row style={{ marginBottom: "10px" }}>
        <Col sm={12} md={6}>
          <MyCard>
            <MyCardHeader>Reports</MyCardHeader>
            <MyCardBody>
              <div className="d-flex flex-wrap">
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      Monthly Financial Report
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      Monthly Financial Report
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div
                      className="mt-3"
                      style={{
                        fontSize: "17px",
                        color: "#232F3E",
                        fontStyle: "italic",
                        fontWeight: "900",
                      }}
                    >
                      Monthly Financial Report
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button className="my-btn-primary">View</button>
                  </div>
                </div>
              </div>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};
export default Dashboard;
