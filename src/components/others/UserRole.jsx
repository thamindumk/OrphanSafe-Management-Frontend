import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css"



const UserRoles = () => {
    return (
    <div className="responsive">
      <Row style={{marginBottom: "10px"}}>
      <Col sm={12} >
        <MyCard>
        <MyCardHeader>User Roles</MyCardHeader>
        <MyCardBody>
         
        <div className="d-flex flex-wrap">
        <div class="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "900"}}>Role ID: b78a99f-0e18-454f-aeae-21b4753affff</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>Role Name: System Administrator</div>
                      </div>
                      <div className="mt-3" style={{ fontSize: "10px", fontWeight: "500", color: "#232F3E" }}>Click here to view assigned users</div>
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                      <button className="my-btn-blue">edit</button>
                      <button className="my-btn-danger">delete</button>
                    </div>
        </div>
        <div class="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "900"}}>Role ID: b78a99f-0e18-454f-aeae-21b4753affff</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>Role Name: System Administrator</div>
                      </div>
                      <div className="mt-3" style={{ fontSize: "10px", fontWeight: "500", color: "#232F3E" }}>Click here to view assigned users</div>
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                      <button className="my-btn-blue">edit</button>
                      <button className="my-btn-danger">delete</button>
                    </div>
        </div>
        <div class="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "900"}}>Role ID: b78a99f-0e18-454f-aeae-21b4753affff</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>Role Name: System Administrator</div>
                      </div>
                      <div className="mt-3" style={{ fontSize: "10px", fontWeight: "500", color: "#232F3E" }}>Click here to view assigned users</div>
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                      <button className="my-btn-blue">edit</button>
                      <button className="my-btn-danger">delete</button>
                    </div>
        </div>
        <div class="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "900"}}>Role ID: b78a99f-0e18-454f-aeae-21b4753affff</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>Role Name: System Administrator</div>
                      </div>
                      <div className="mt-3" style={{ fontSize: "10px", fontWeight: "500", color: "#232F3E" }}>Click here to view assigned users</div>
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                      <button className="my-btn-blue">edit</button>
                      <button className="my-btn-danger">delete</button>
                    </div>
        </div>
        <div class="role-container">
                    <div
                      className="role-container-left d-flex flex-column justify-content-between mr-3"
                    >
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "900"}}>Role ID: b78a99f-0e18-454f-aeae-21b4753affff</div>
                        <div style={{ fontSize: "12px", fontWeight: "500", color: "#232F3E" }}>Role Name: System Administrator</div>
                      </div>
                      <div className="mt-3" style={{ fontSize: "10px", fontWeight: "500", color: "#232F3E" }}>Click here to view assigned users</div>
                    </div>
                    <div
                      className="role-container-right d-flex justify-content-end align-items-center"
                    >
                      <button className="my-btn-blue" >edit</button>
                      <button className="my-btn-danger">delete</button>
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
  export default UserRoles;