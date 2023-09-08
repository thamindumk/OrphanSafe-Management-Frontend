import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import "../assets/css/profileIntro.css";

const ProfileIntro = () => {
  return (
    <div className="card">
      <div className="background">
        <Row className="profile">
          <Col sm={12} md={12} lg={6} xl={4}>
            <Image
              className="profileImage"
              src="https://i.guim.co.uk/img/media/60ef89fa5cc775cea493523a8c4b354c8f58faf2/153_0_3288_1974/master/3288.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a68540f4bf558e4f7e4887d14a934547"
              alt="profile"
            ></Image>
          </Col>
          <Col sm={12} md={12} lg={6} xl={8}>
            <h1 className="name-header">Thamindu Manodya</h1>
            <p className="name-sub">12 years old</p>
            <p className="name-sub">Male</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProfileIntro;
