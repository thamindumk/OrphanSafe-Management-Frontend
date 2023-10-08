import React from "react";
import { Col, Row, Image } from "react-bootstrap";
//import "../assets/css/profileIntro.css";
import "../../assets/css/profileIntro.css"
import { useViewParentProfilesQuery} from "../../slices/profileApiSlice";

const ParentIntro = () => {

    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get("parentId");
    const {data, isLoading,isError,isSuccess}=
    useViewParentProfilesQuery(paramValue);

  return (
    <div className="card">
      <div className="background">
        <Row className="profile">
          <Col xs={12} sm={12} md={4} lg={6} xl={4}>
            <div className="profileImage"></div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={8}>
            <h1 className="name-header">{data.parentProfile.NameOfFather}</h1>
            <p className="name-header">{data.parentProfile.NameOfMother}</p>
            <p className="name-sub">{data.parentProfile.AdoptionPreference}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ParentIntro;