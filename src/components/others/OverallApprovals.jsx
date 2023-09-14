import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";

const OverallApproval = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, []);
  return (
    <div>
    <Row style={{ marginBottom: "20px" }}>
    <Col sm={12}>
      <MyCard>
        <MyCardHeader>Parents Request Case Information</MyCardHeader>
        <MyCardBody>
          <div style={{ height: '300px', overflowY: 'auto' }}>
            <Table
              responsive
              //ref={tableRef}
              id="example"
              className="row-border"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Parent ID</th>
                  <th>Name</th>
                  <th>Child ID</th>
                  <th>Child Name</th>
                  <th>Reason for request</th>
                  <th>Approve</th>
                  <th>reject</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Bunula Silva</a>
                    </LinkContainer>
                  </td>
                  <td>CH-2345</td>
                  <td><LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Kalum Gamage</a>
                    </LinkContainer></td>
                  <td>Get an idea about the cases related to the child</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Bunula Silva</a>
                    </LinkContainer>
                  </td>
                  <td>CH-2345</td>
                  <td><LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Kalum Gamage</a>
                    </LinkContainer></td>
                  <td>Get an idea about the cases related to the child</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Bunula Silva</a>
                    </LinkContainer>
                  </td>
                  <td>CH-2345</td>
                  <td><LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Kalum Gamage</a>
                    </LinkContainer></td>
                  <td>Get an idea about the cases related to the child</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Bunula Silva</a>
                    </LinkContainer>
                  </td>
                  <td>CH-2345</td>
                  <td><LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Kalum Gamage</a>
                    </LinkContainer></td>
                  <td>Get an idea about the cases related to the child</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </MyCardBody>
      </MyCard>
    </Col>
  </Row>
  <Row style={{ marginBottom: "20px" }}>
    <Col sm={12}>
      <MyCard>
        <MyCardHeader>Parents Request child profile</MyCardHeader>
        <MyCardBody>
          <div style={{ height: '300px', overflowY: 'auto' }}>
            <Table
              responsive
              //ref={tableRef}
              id="example"
              className="row-border"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Parent ID</th>
                  <th>Name</th>
                  <th>Child ID</th>
                  <th>Child Name</th>
                  <th>Reason for request</th>
                  <th>Approve</th>
                  <th>reject</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>CH-2345</td>
                  <td><LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Piyal Gamage</a>
                    </LinkContainer></td>
                  <td>request to check child details for adoption</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>CH-2345</td>
                  <td><LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Piyal Gamage</a>
                    </LinkContainer></td>
                  <td>request to check child details for adoption</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>CH-2345</td>
                  <td><LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Piyal Gamage</a>
                    </LinkContainer></td>
                  <td>request to check child details for adoption</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>CH-2345</td>
                  <td><LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Piyal Gamage</a>
                    </LinkContainer></td>
                  <td>request to check child details for adoption</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </MyCardBody>
      </MyCard>
    </Col>
  </Row>
  <Row style={{ marginBottom: "20px" }}>
    <Col sm={12}>
      <MyCard>
        <MyCardHeader>Receive Funds approval</MyCardHeader>
        <MyCardBody>
          <div style={{ height: '300px', overflowY: 'auto' }}>
            <Table
              responsive
              //ref={tableRef}
              id="example"
              className="row-border"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Receipt number</th>
                  <th>Donator's name</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Approve</th>
                  <th>reject</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1092</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>2023/12/02</td>
                  <td>Rs.30,000</td>
                  <td>Donation for renovation of little dreams orphanage</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>1092</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>2023/12/02</td>
                  <td>Rs.30,000</td>
                  <td>Donation for renovation of little dreams orphanage</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>1092</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>2023/12/02</td>
                  <td>Rs.30,000</td>
                  <td>Donation for renovation of little dreams orphanage</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
               
              </tbody>
            </Table>
          </div>
        </MyCardBody>
      </MyCard>
    </Col>
  </Row>
  <Row style={{ marginBottom: "20px" }}>
    <Col sm={12}>
      <MyCard>
        <MyCardHeader>Staff registration approval</MyCardHeader>
        <MyCardBody>
          <div style={{ height: '300px', overflowY: 'auto' }}>
            <Table
              responsive
              //ref={tableRef}
              id="example"
              className="row-border"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Staff ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email Address</th>
                  <th>Contact Number</th>
                  <th>Approve</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>St-3567</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>Orphanage manager</td>
                  <td>Sunil@gamil.com</td>
                  <td>071334567</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>St-3567</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Kamal Perera</a>
                    </LinkContainer>
                  </td>
                  <td>Orphanage Staff</td>
                  <td>Sunil@gamil.com</td>
                  <td>071334567</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>St-3567</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>Orphanage manager</td>
                  <td>Sunil@gamil.com</td>
                  <td>071334567</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>St-3567</td>
                  <td>
                    <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <a href="#">Sunil Perera</a>
                    </LinkContainer>
                  </td>
                  <td>Orphanage manager</td>
                  <td>Sunil@gamil.com</td>
                  <td>071334567</td>
                  <td><button className="my-btn mr-2">Approve</button></td>
                  <td>
                  <button className="my-btn-danger">Reject</button>
                  </td>
                </tr>
              
               
              </tbody>
            </Table>
          </div>
        </MyCardBody>
      </MyCard>
    </Col>
  </Row>
  </div>
  );
};
export default OverallApproval;
