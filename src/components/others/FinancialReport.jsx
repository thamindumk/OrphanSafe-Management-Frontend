import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css"



const FinancialReport = () => {
    return (
    <div className="responsive">
      <Row style={{marginBottom: "10px"}}>
      <Col sm={6} >
        <MyCard>
        <MyCardHeader>Financial Reports </MyCardHeader>
        <MyCardBody>
         
        <div className="d-flex flex-wrap">
        <div className="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Cash Flow Report</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>This report tracks the inflow and outflow of cash and cash equivalents during a given period.</div>
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
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Reserve Fund Report</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>his report tracks the balance and utilization of reserve funds or contingency funds set aside for emergencies or future needs.</div>
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
                        <div style={{fontsize: "15px",fontWeight: "900" }}>Annual Financial Report</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>An annual report provides a comprehensive overview of the orphanage's financial activities, achievements, and challenges, often including narrative sections and visual elements for stakeholders.</div>
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
  export default FinancialReport;