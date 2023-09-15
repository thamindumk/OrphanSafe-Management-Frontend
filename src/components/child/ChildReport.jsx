import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css"



const ChildReport = () => {
  const openNewTab = () => {
    const url = "http://localhost/Reporter/ReturnReport?args=&hasparams=true&sql=&filename=UsersReport&reportname=UsersReport&IsDynamic=true"; // Replace with your desired URL
    window.open(url, "_blank"); // "_blank" opens the URL in a new tab
  };
    return (
    <div className="responsive">
      <Row style={{marginBottom: "10px"}}>
      <Col sm={6} >
        <MyCard>
        <MyCardHeader>Child Reports </MyCardHeader>
        <MyCardBody>
         
        <div className="d-flex flex-wrap">
        <div className="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{fontsize: "15px",fontWeight: "900" }}>User Account Report</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>This report contains detailed information about each child, including their name, date of birth, gender, medical history, and any special needs or requirements.</div>
                      </div>
                      
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                     
                     <button className="my-btn-primary" onClick={openNewTab}>
                      View
                    </button>
                    </div>


        </div>
        <div className="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Admission and Discharge Report</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}> It tracks the admission and discharge of children from the orphanage, including the reasons for admission and discharge and any legal or administrative details.</div>
                      </div>
                      
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                     
                     <button className="my-btn-primary" onClick={openNewTab}>
                      View
                    </button>
                    </div>


        </div>
        <div className="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Educational Progress Report</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>For orphanages that provide education services, this report tracks the academic progress of each child, including attendance, grades, and any additional educational support provided.</div>
                      </div>
                      
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                     
                     <button className="my-btn-primary" onClick={openNewTab}>
                      View
                    </button>
                    </div>


        </div>
        <div className="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Child Development Assessment Report</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>This report assesses the developmental milestones and progress of each child in areas such as physical, emotional, cognitive, and social development.</div>
                      </div>
                      
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                     
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
  export default ChildReport;