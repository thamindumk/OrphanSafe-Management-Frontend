import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";

const OngoinCaseView = () => {
  const tableRef = useRef(null);

  const tableDetails = [
    {
      Case_ID: 1,
      Discription: "medical check for eye condition",
      Chil_ID: 5,
      Child_Name: "Eranga Malshan",
      Last_Update: "2021/03/08",
      Asigned_Worker: "K.P.Lalith",
    },
    {
      Case_ID: 2,
      Discription: "property case in Kalutara court",
      Chil_ID: 8,
      Child_Name: "Lasindu Withanage",
      Last_Update: "2023/01/15",
      Asigned_Worker: "P.L.Wijesekara",
    },
    {
      Case_ID: 3,
      Discription: "Mental checkup",
      Chil_ID: 13,
      Child_Name: "Supun Kumara",
      Last_Update: "2023/04/08",
      Asigned_Worker: "K.S.D.Perera",
    },
    {
      Case_ID: 4,
      Discription: "Schoolarship program",
      Chil_ID: 25,
      Child_Name: "Rakindu Wijethunga",
      Last_Update: "2021/12/18",
      Asigned_Worker: "S.R.Sujeewa",
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
                    <th>Case ID</th>
                    <th>Discription</th>
                    <th>Child ID</th>
                    <th>Child Name</th>
                    <th>Last Update</th>
                    <th>Asigned worker</th>
                  </tr>
                </thead>
                <tbody>
                  {tableDetails.map((data) => (
                    <tr>
                      <td>{data.Case_ID}</td>
                      <td>
                        <LinkContainer to="/cases/viewOngoingCases/overview">
                          <a href="#">{data.Discription}</a>
                        </LinkContainer>
                      </td>
                      <td>{data.Chil_ID}</td>
                      <td>{data.Child_Name}</td>
                      <td>{data.Last_Update}</td>
                      <td>{data.Asigned_Worker}</td>
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

export default OngoinCaseView;
