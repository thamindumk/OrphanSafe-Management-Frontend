import React from "react";
import { Col, Row, Image } from "react-bootstrap";
//import "../assets/css/profileIntro.css";
import "../../assets/css/profileIntro.css"
import { useViewSocialWorkerProfilesQuery } from "../../slices/profileApiSlice";

const SocialWorkerIntro = () => {
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get("workerId");
    const {data, isLoading,isError,isSuccess}=
    useViewSocialWorkerProfilesQuery(paramValue);

  return (
    <div className="card">
      <div className="background">
        <Row className="profile">
          <Col xs={12} sm={12} md={4} lg={6} xl={4}>
            <div className="profileImage"></div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={8}>
            <h1 className="name-header">{data.socialWorkerProfile.Name}</h1>
            <p className="name-sub">Orphanage Name:</p>
            <p className="name-sub">{data.socialWorkerProfile.OrphanageName}</p>
            <p className="name-sub">{data.socialWorkerProfile.Category}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SocialWorkerIntro;