import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import { useGetCaseByCaseIdQuery } from "../../slices/caseApiSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

const CaseOverviewCard = () => {
  // Access the query parameters from the location object
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("caseId");
  const { data, isError, isSuccess, isLoading } =
    useGetCaseByCaseIdQuery(paramValue);
  return (
    <div>
      <Row>
        <Col sm={10}>
          <MyCard>
            <MyCardHeader>Case Information</MyCardHeader>
            <MyCardBody>
              <Form>
                {isError && (
                  <Col className="text-center">
                    <strong>Unexpected Error occured Sorry! :(</strong>
                  </Col>
                )}
                {isLoading && <Col className="text-center">Loading Data!</Col>}
                {isSuccess && data && (
                  <Table responsive bordered style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td>Case ID</td>
                        <td>{data.caseInfo.Id}</td>
                      </tr>
                      <tr>
                        <td>Case Case Name</td>
                        <td>{data.caseInfo.CaseName}</td>
                      </tr>
                      <tr>
                        <td>Case Discription</td>
                        <td>{data.caseInfo.Description}</td>
                      </tr>
                      <tr>
                        <td>Case Status</td>
                        <td>{data.caseInfo.State}</td>
                      </tr>
                      <tr>
                        <td>Child ID</td>
                        <td>{data.caseInfo.ChildProfileId}</td>
                      </tr>
                      <tr>
                        <td>Child Name</td>
                        <td>{data.caseInfo.ChildName}</td>
                      </tr>
                      <tr>
                        <td>Last Update</td>
                        <td>
                          {data.caseInfo.LastUpdate
                            ? data.caseInfo.LastUpdate
                            : "Not started"}
                        </td>
                      </tr>
                      <tr>
                        <td>Started date</td>
                        <td>{data.caseInfo.CreatedAt}</td>
                      </tr>
                      <tr>
                        <td>Assigned Worker</td>
                        <td>{data.caseInfo.SocialWorkerName}</td>
                      </tr>
                      <tr>
                        <td>Assigned by</td>
                        <td>{data.caseInfo.CreatedBy}</td>
                      </tr>
                      <tr>
                        <td>Case logs</td>
                        <td>
                          {userInfo.roleName == "socialWorker" ? (
                            <Link
                              to={`/external/EditDeleteCaseLog?caseId=${data.caseInfo.Id}`}
                            >
                              <a href="#" className="blue-button">
                                View
                              </a>
                            </Link>
                          ) : (
                            <Link
                              to={`/cases/caseLogs?caseId=${data.caseInfo.Id}`}
                            >
                              <a href="#" className="blue-button">
                                View
                              </a>
                            </Link>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                )}
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};

export default CaseOverviewCard;
