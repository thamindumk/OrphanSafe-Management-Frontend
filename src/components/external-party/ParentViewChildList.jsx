import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row,Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";

const ParentViewChildList = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, []);
  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Child Details</MyCardHeader>
          <MyCardBody>
            <div>
              <Table
                responsive
                ref={tableRef}
                id="example"
                className="row-border"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Child ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birthday</th>
                    <th>Assigned Orphanage</th>
                    <th>Guardian name</th>
                   
                  </tr>
                  
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <LinkContainer to="/parent/viewProfile/overview">
                        <a href="#">Piyal Gamage</a>
                      </LinkContainer>
                    </td>
                    <td>Male</td>
                    <td>2012/10/11</td>
                    <td>Little Dreams</td>
                    <td>Nupun pilapitiya</td>
                    
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <LinkContainer to="/parent/viewProfile/overview">
                        <a href="#">Piyal Gamage</a>
                      </LinkContainer>
                    </td>
                    <td>Male</td>
                    <td>2012/10/11</td>
                    <td>Little Dreams</td>
                    <td>Nupun pilapitiya</td>
                    
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <LinkContainer to="/parent/viewProfile/overview">
                        <a href="#">Piyal Gamage</a>
                      </LinkContainer>
                    </td>
                    <td>Male</td>
                    <td>2012/10/11</td>
                    <td>Little Dreams</td>
                    <td>Nupun pilapitiya</td>
                    
                  </tr>
                </tbody>
              </Table>
            </div>
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};
export default ParentViewChildList;
