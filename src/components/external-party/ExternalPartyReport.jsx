import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css"



const ExternalPartyReport = () => {
    return (
    <div className="responsive">
      <Row style={{marginBottom: "10px"}}>
      <Col sm={6} >
        <MyCard>
        <MyCardHeader>External Party Reports </MyCardHeader>
        <MyCardBody>
         
        <div className="d-flex flex-wrap">
        <div className="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Donor Reports</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>Give the report of the donors who contribute financially to the orphanage </div>
                      </div>
                      
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                     
                      <button className="my-btn-primary">View</button>
                    </div>


        </div>
        <div className="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Adoption and Placement Reports</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>Give the report  of adoption and placement happens through a particular orphanage</div>
                      </div>
                      
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                     
                      <button className="my-btn-primary">View</button>
                    </div>


        </div>
        <div className="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Grant Reports</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>Give the report of orphanage receives grants or funding from government agencies </div>
                      </div>
                      
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                     
                      <button className="my-btn-primary">View</button>
                    </div>


        </div>
        <div className="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Impact Report</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>This reports highlight the positive impact of the orphanage's programs and services on the children's lives. </div>
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
  export default ExternalPartyReport;