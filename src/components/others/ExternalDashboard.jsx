import React from "react";
import { Button, Col, Form, Row, Table, Card ,Image} from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";

const ExternalDashboard = () => {
  return (
    <div className="responsive">
      <div className="cardsIm">
        <div className="background">
          <h1 className="name-headers">Welcome </h1>
          <Row
            className="profile"
            style={{ paddingTop: "30px", paddingLeft: "50px" }}
          >

            <Image
                src="https://img.freepik.com/premium-photo/group-happy-children-street_1001749-3005.jpg" // Replace with the URL or path to your image
                alt="Card Image Alt Text"
                className="card-image"
            />
           
          </Row>
        </div>
      </div>

      <Row
            className="profile"
            style={{ paddingTop: "30px", paddingLeft: "50px" }}
          >
            <Col md={3} sm={6} xs={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Child profiles
                  </Col>
                </Row>

                <div className="CardNumber">2034</div>
                <div className="CardItalic">Registered child profiles</div>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fas fa-globe"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Working staff
                  </Col>
                </Row>

                <div className="CardNumber">450</div>
                <div className="CardItalic">Registered staff profiles</div>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fab fa-xbox"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Social Workers
                  </Col>
                </Row>

                <div className="CardNumber">106</div>
                <div className="CardItalic">Registered social workers profiles</div>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} style={{ marginBottom: "10px" }}>
              <Card className="shadow">
                <Row className="CardRow">
                  <Col className="colDec text-end">
                    <i
                      className="fas fa-university"
                      style={{ fontSize: "30px", marginRight: "10px" }}
                    ></i>
                    Registered Orphanages
                  </Col>
                </Row>

                <div className="CardNumber">246</div>
                <div className="CardItalic">Registered orphanages</div>
              </Card>
            </Col>
          </Row>

    </div>
  );
};
export default ExternalDashboard;
