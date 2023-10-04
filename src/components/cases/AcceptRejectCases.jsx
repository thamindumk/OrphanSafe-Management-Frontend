import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import {
  useGetCaseInvitationByUserIdQuery,
  useUpdateCaseStateMutation,
} from "../../slices/caseApiSlice";
import { toast } from "react-toastify";

import { useState } from "react";

const AcceptRejectCases = () => {
  const [index, setIndex] = useState(0);

  const { data, isError, isSuccess, isLoading, refetch } =
    useGetCaseInvitationByUserIdQuery();

  const [updateState, { err, success, loading }] = useUpdateCaseStateMutation();

  const submitHandler = async (result) => {
    try {
      const state = {
        response: result,
        caseId: data.caseInvitations[index].CaseId,
      };
      const res = await updateState(state).unwrap();
      toast.success("Approvation complete");
      refetch();
      if (isSuccess) {
        downIndex();
      }
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  function upIndex() {
    setIndex(index + 1);
  }
  function downIndex(data) {
    setIndex(index - 1);
  }
  if (isLoading) {
    return <div>Still Loading the page Please wait a moment</div>;
  } else if (isError) {
    return <div>Something went wrong in the server</div>;
  } else if (isSuccess && data.caseInvitations.length > 0) {
    return (
      <div>
        <Row style={{ marginBottom: "10px" }}>
          <Col sm={5}>
            <div className="d-flex">
              {0 < index ? (
                <button className="my-btn" onClick={downIndex}>
                  Previous Case
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </Col>
          <Col sm={5}>
            <div class="d-flex justify-content-end">
              {index < data.caseInvitations.length &&
              index < data.caseInvitations.length - 1 ? (
                <button className="my-btn" onClick={upIndex}>
                  Next Case
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </Col>
          <Col md={2} sm={0} lg={2}></Col>
        </Row>
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
                        <td>
                          <b>{data.caseInvitations[index].CaseName}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Case Description</td>
                        <td>{data.caseInvitations[index].Description}</td>
                      </tr>
                      <tr>
                        <td>Child name</td>
                        <td>{data.caseInvitations[index].ChildName}</td>
                      </tr>
                      <tr>
                        <td>Assigned By</td>
                        <td>{data.caseInvitations[index].AssignedBy}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="mt-1"></div>
                  <div className="d-flex justify-content-end mt-4">
                    <button
                      className="my-btn mr-2"
                      onClick={() => submitHandler("ONGOING")}
                    >
                      Accept approval
                    </button>
                    <button
                      className="my-btn-danger"
                      onClick={() => submitHandler("REJECTED")}
                    >
                      Reject approval
                    </button>
                  </div>
                </Form>
              </MyCardBody>
            </MyCard>
          </Col>
        </Row>
      </div>
    );
  } else {
    return <div>No invitations</div>;
  }
};
export default AcceptRejectCases;
