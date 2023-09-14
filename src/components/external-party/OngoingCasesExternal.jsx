import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";

const OngoingCaseViewExternal = () => {
  const tableRef = useRef(null);

  const tableDetails = [
    {
      Case_ID: 1,
      Description: "medical check for eye condition",
      Child_ID: 5,
      Child_Name: "Eranga Malshan",
      Last_Update: "2021/03/08",
      
    },
    {
        Case_ID: 2,
        Description: "property case in Kalutara court",
        Child_ID: 8,
        Child_Name: "Lasindu Withanage",
        Last_Update: "2023/01/15",
       
      },
      {
        Case_ID: 3,
        Description: "Mental checkup",
        Child_ID: 13,
        Child_Name: "Supun Kumara",
        Last_Update: "2023/04/08",
        
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
          <MyCardHeader>View Cases</MyCardHeader>
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
                    <th>Case ID</th>
                    <th>Description</th>
                    <th>Child ID</th>
                    <th>Child Name</th>
                    <th>Last Update</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {tableDetails.map((data) => (
                    <tr>
                      <td>{data.Case_ID}</td>
                      <td>
                        <LinkContainer to="/external/EditDeleteCaseLog">
                          <a href="#">{data.Description}</a>
                        </LinkContainer>
                      </td>
                      <td>{data.Child_ID}</td>
                      <td>{data.Child_Name}</td>
                      <td>{data.Last_Update}</td>
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

export default OngoingCaseViewExternal;
