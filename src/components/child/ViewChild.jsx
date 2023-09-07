import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";

const ViewChild = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, []);
  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Staff Details</MyCardHeader>
          <MyCardBody>
            <div>
              <table
                ref={tableRef}
                id="example"
                className="row-border"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Staff ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Birthday</th>
                    <th>Address</th>
                    <th>ID Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <LinkContainer to="/profile/viewProfile/overview">
                        <a href="#">Piyal Gamage</a>
                      </LinkContainer>
                    </td>
                    <td>2023/07/15 15:06 PM</td>
                    <td>version 2.0</td>
                    <td>2023/07/15 15:06 PM</td>
                    <td>version 2.0</td>
                    <td>
                      <i className="fas fa-edit mr-3 text-primary"></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};
export default ViewChild;
