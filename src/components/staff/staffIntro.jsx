import React from "react";
import { Col, Row, Image } from "react-bootstrap";
//import "../assets/css/profileIntro.css";
import "../../assets/css/profileIntro.css"
import { useViewStaffProfilesQuery} from "../../slices/profileApiSlice";

const StaffIntro = () => {
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get("staffId");
    const {data, isLoading,isError,isSuccess}=
    useViewStaffProfilesQuery(paramValue);

  return (
    <div className="card">
      <div className="background">
        <Row className="profile">
          <Col xs={12} sm={12} md={4} lg={6} xl={4}>
            <div className="profileImage"></div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={8}>
            <h1 className="name-header">{data.staffProfile.UserName}</h1>
            <p className="name-sub">Orphanage Name:</p>
            <p className="name-sub">{data.staffProfile.OrphanageName}</p>
            <p className="name-sub">{data.staffProfile.Gender}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StaffIntro;