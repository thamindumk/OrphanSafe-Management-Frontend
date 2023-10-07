import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { useGetParentProfileListQuery } from "../../slices/profileApiSlice";
import { Link } from "react-router-dom";


const ViewParent = () => {
  const tableRef = useRef(null);

  const { data, isError, isSuccess, isLoading } = useGetParentProfileListQuery();


  useEffect(() => {
    $(tableRef.current).DataTable();
  }, [data]);
  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Parent details</MyCardHeader>
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
                    <th>Name Of Father</th>
                    <th>Name Of Mother</th>
                    <th>Email</th>
                    <th>Father's Mobile Number</th>
                    <th>Mother's Mobile Number</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                {data.parentsProfiles.map((parent) => (
                    <tr>
                      <td>{parent.NameOfFather}</td>
                      <td>{parent.NameOfMother}</td>
                      <td>{parent.Email}</td>
                      <td>{parent.MobileOfFather}</td>
                      <td>{parent.MobileOfMother}</td>
                      <td>{parent.Address}</td>
                      <td>
                      <Link className="blue-button" to={`/edit/editParentProfile?parentId=${parent.UserId}`}>
                          Edit
                        </Link>
                        <Link className="red-button">
                          Delete
                        </Link>
                      {/* <i className="fas fa-edit mr-3 text-primary"></i> */}
                      {/* <i className="fas fa-trash text-danger"></i> */}
                    </td>
                    </tr>
                  ))} 
                </tbody>

              </Table>
            </div>}
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};
export default ViewParent;
