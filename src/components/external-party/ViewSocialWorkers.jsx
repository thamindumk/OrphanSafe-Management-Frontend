import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";
import { useGetSocialWorkerProfileListQuery } from "../../slices/profileApiSlice";

const ViewSocialWorkers = () => {
  const tableRef = useRef(null);
  const { data, isError, isSuccess, isLoading } = useGetSocialWorkerProfileListQuery();

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, [data]);
  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Social worker Details</MyCardHeader>
          <MyCardBody>
          {isError && <Col className="text-center"><strong>Unexpected Error occurred Sorry! :(</strong></Col>}
            {isLoading && <Col className="text-center">Loading Data!</Col>}
            {isSuccess && 
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Gender</th>
                    <th>Organization</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {data.socialWorkerProfiles.map((worker) => (
                    <tr>
                       <LinkContainer to="/monitoring/viewSocialWorker/overview">
                      <td>{worker.Name}</td>
                      </LinkContainer>
                      <td>{worker.Email}</td>
                      <td>{worker.PhoneNumber}</td>
                      <td>{worker.Gender}</td>
                      <td>{worker.Organization}</td>
                      <td>
                      <i className="fas fa-edit mr-3 text-primary"></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                    </tr>
                  ))}
                  {/* <tr>
                    <td>
                      <LinkContainer to="/monitoring/viewSocialWorker/overview">
                        <a href="#">Sunil Perera</a>
                      </LinkContainer>
                    </td>
                    <td>Sunil@gmail.com</td>
                    <td>07776691234</td>
                    <td>MALE</td> 
                    <td>Health</td>
                    <td>
                      <i className="fas fa-edit mr-3 text-primary"></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr> */}
                 
                </tbody>
              </Table>
            </div>
            }
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};
export default ViewSocialWorkers;
