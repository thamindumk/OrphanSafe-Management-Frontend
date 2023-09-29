import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const ViewStaff = () => {
  const tableRef = useRef(null);

  const tableDetails = [
    {
      Staff_ID: 1,
      Name: "Piyal Gamage",
      Role: "Manager",
      Email: "piyalgamage@gmail.com",
      Contact_Number: "0764534789",
      NIC: "20025102700",
    },
    {
      Staff_ID: 2,
      Name: "Piyal Gamage",
      Role: "Manager",
      Email: "piyalgamage@gmail.com",
      Contact_Number: "0764534789",
      NIC: "20025102700",
    },
    {
      Staff_ID: 3,
      Name: "Kasun Rajitha",
      Role: "Manager",
      Email: "kasunr@gmail.com",
      Contact_Number: "0764534789",
      NIC: "20025102700",
    },
    {
      Staff_ID: 4,
      Name: "Piyal Gamage",
      Role: "Manager",
      Email: "piyalgamage@gmail.com",
      Contact_Number: "0764534789",
      NIC: "20025102700",
    },
    {
      Staff_ID: 5,
      Name: "Piyal Gamage",
      Role: "Manager",
      Email: "piyalgamage@gmail.com",
      Contact_Number: "0764534789",
      NIC: "20025102700",
    },
  ];

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
              <Table
                responsive
                ref={tableRef}
                id="example"
                className="row-border"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Staff ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>ID Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tableDetails.map((data) => (
                    <tr>
                      <td>{data.Staff_ID}</td>
                      <td>
                        <Link
                          to={'/monitoring/viewStaff/overview?id=1'}
                        >
                          <a href="#">{data.Name}</a>
                        </Link>
                      </td>
                      <td>{data.Role}</td>
                      <td>{data.Email}</td>
                      <td>{data.Contact_Number}</td>
                      <td>{data.NIC}</td>
                      <td>
                        <i className="fas fa-edit mr-3 text-primary"></i>
                        <i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};
export default ViewStaff;
