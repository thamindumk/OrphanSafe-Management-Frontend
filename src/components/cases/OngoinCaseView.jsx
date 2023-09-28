import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row, Table, Toast } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { LinkContainer } from "react-router-bootstrap";
import { useGetCaseListQuery } from "../../slices/caseApiSlice";
import { toast } from "react-toastify";

const OngoinCaseView = () => {
  const tableRef = useRef(null);

  const { data, isError, isSuccess, isLoading } = useGetCaseListQuery();
  // const tableDetails = [
  //   {
  //     Case_ID: 1,
  //     Discription: "medical check for eye condition",
  //     Chil_ID: 5,
  //     Child_Name: "Eranga Malshan",
  //     Last_Update: "2021/03/08",
  //     Asigned_Worker: "K.P.Lalith",
  //   },
  //   {
  //     Case_ID: 2,
  //     Discription: "property case in Kalutara court",
  //     Chil_ID: 8,
  //     Child_Name: "Lasindu Withanage",
  //     Last_Update: "2023/01/15",
  //     Asigned_Worker: "P.L.Wijesekara",
  //   },
  //   {
  //     Case_ID: 3,
  //     Discription: "Mental checkup",
  //     Chil_ID: 13,
  //     Child_Name: "Supun Kumara",
  //     Last_Update: "2023/04/08",
  //     Asigned_Worker: "K.S.D.Perera",
  //   },
  //   {
  //     Case_ID: 4,
  //     Discription: "Schoolarship program",
  //     Chil_ID: 25,
  //     Child_Name: "Rakindu Wijethunga",
  //     Last_Update: "2021/12/18",
  //     Asigned_Worker: "S.R.Sujeewa",
  //   },
  // ];

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, [data]);
  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Staff Details</MyCardHeader>
          <MyCardBody>
            {isError && (
              <Col className="text-center">
                <strong>Unexpected Error occured Sorry! :(</strong>
              </Col>
            )}
            {isLoading && <Col className="text-center">Loading Data!</Col>}
            {isSuccess && (
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
                      <th>Case Name</th>
                      <th>Child Name</th>
                      <th>State</th>
                      <th>Last Update</th>
                      <th>Assigned worker</th>
                      <th>Assigned By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.caseList.map((data) => (
                      <tr>
                        <td>{data.Id}</td>
                        <td>
                          <LinkContainer to="/cases/viewOngoingCases/overview">
                            <a href="#">{data.CaseName}</a>
                          </LinkContainer>
                        </td>
                        <td>{data.ChildName}</td>
                        <td>{data.State}</td>
                        <td>
                          {data.LastUpdate ? data.LastUpdate : "not started"}
                        </td>
                        <td>{data.SocialWorkerName}</td>
                        <td>{data.CreatedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};

export default OngoinCaseView;
