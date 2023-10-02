import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import { useGetCaseInvitationByUserIdQuery } from "../../slices/caseApiSlice";
import { useState } from "react";

const AcceptRejectCases = () => {
  const [index, setIndex] = useState(0);

  const { data, isError, isSuccess, isLoading } =
    useGetCaseInvitationByUserIdQuery();

  if (isSuccess) {
    return (
      <div>
        {data.caseInvitations.length > 1 &&
        0 < index &&
        index < data.caseInvitations.length ? (
          <Row style={{ marginBottom: "10px" }}>
            <Col md={8} sm={12} lg={8}>
              <div className="d-flex justify-content-start">
                <button className="my-btn" onClick={setIndex(index - 1)}>
                  Previous Case
                </button>
              </div>
            </Col>
          </Row>
        ) : data.caseInvitations.length > 1 &&
          0 < index &&
          index < data.caseInvitations.length-1 ? (
          <Row style={{ marginBottom: "10px" }}>
            <Col md={8} sm={12} lg={8}>
              <div className="d-flex justify-content-start">
                <button className="my-btn" onClick={setIndex(index - 1)}>
                  Previous Case
                </button>
              </div>
            </Col>
            <Col md={2} sm={12} lg={2}>
              <div className="d-flex justify-content-start">
                <button className="my-btn" onClick={setIndex(index + 1)}>
                  Next Case
                </button>
              </div>
            </Col>
            <Col md={2} sm={0} lg={2}></Col>
          </Row>
        ) : data.caseInvitations.length > 1 &&
          index < data.caseInvitations.length ? (
          <Row style={{ marginBottom: "10px" }}>
            <Col md={2} sm={10} lg={10}>
              <div className="d-flex justify-content-end">
                <button className="my-btn" onClick={setIndex(index + 1)}>
                  Next Case
                </button>
              </div>
            </Col>
          </Row>
        ) : (
          <div></div>
        )}

        <Row>
          <Col sm={10}>
            <MyCard>
              <MyCardHeader>Cases Information</MyCardHeader>
              <MyCardBody>
                <Form>
                  <Table responsive bordered style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td>Case Number</td>
                        <td>{data.caseInvitations[index].CaseId}</td>
                      </tr>
                      <tr>
                        <td>Case Name</td>
                        <td>{data.caseInvitations.length}</td>
                      </tr>
                      <tr>
                        <td>Case Description</td>
                        <td>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td>Child name</td>
                        <td>Piyal Kodithuwakku</td>
                      </tr>
                      <tr>
                        <td>Case Documents</td>
                        <td>
                          <a href="#" className="blue-button">
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="mt-1"></div>
                  <div className="d-flex justify-content-end mt-4">
                    <button className="my-btn mr-2">Accept approval</button>
                    <button className="my-btn-danger">Reject approval</button>
                  </div>
                </Form>
              </MyCardBody>
            </MyCard>
          </Col>
        </Row>
      </div>
    );
  }
};
export default AcceptRejectCases;
