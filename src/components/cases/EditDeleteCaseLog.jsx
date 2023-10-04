import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import { useSelector } from "react-redux";
import {
  useGetCaseLogsQuery,
  useDeleteCaseLogMutation,
} from "../../slices/caseApiSlice";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const EditDeleteCaseLog = () => {
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(true);
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("caseId");
  const { userInfo } = useSelector((state) => state.auth);
  const { data, isLoading, isError, isSuccess, refetch } =
    useGetCaseLogsQuery(paramValue);
  const [deleteCaseLog, { err, loading, success }] = useDeleteCaseLogMutation();

  const deleteHandler = async () => {
    try {
      console.log(data);
      const state = {
        caseId: data.caseLogs[index].CaseId,
      };
      console.log(state);
      const res = await deleteCaseLog(state).unwrap();
      toast.success("Case Log Deleted");
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
  if (!isLoading) {
    return <div>Loading...</div>;
  } else if (isSuccess && data.caseLogs.length > 0) {
    return (
      <div>
        <Row style={{ marginBottom: "10px" }}>
          <Col sm={5}>
            <div className="d-flex ">
              {data.caseLogs.length > 0 && index > 0 ? (
                <button className="my-btn" onClick={downIndex}>
                  Previous Case Log
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </Col>
          <Col sm={5}>
            <div className="d-flex justify-content-end">
              {index < data.caseLogs.length &&
              index < data.caseLogs.length - 1 ? (
                <button className="my-btn" onClick={upIndex}>
                  Next Case Log
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </Col>
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
                        <td>Case ID</td>
                        <td>{data.caseLogs[index].CaseId}</td>
                      </tr>
                      <tr>
                        <td>Case Name</td>
                        <td>{data.caseLogs[index].CaseName}</td>
                      </tr>
                      <tr>
                        <td>Log Name</td>
                        <td>{data.caseLogs[index].LogName}</td>
                      </tr>
                      <tr>
                        <td>Log Description</td>
                        <td>{data.caseLogs[index].Description}</td>
                      </tr>
                      <tr>
                        <td>Creted Time</td>
                        <td>{data.caseLogs[index].LoggedDateTime}</td>
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
                  {userInfo.roleName == "socialWorker" && index == 0 ? (
                    <div className="d-flex justify-content-end mt-4">
                      <button className="my-btn mr-2">Edit</button>
                      <Link
                        to={`/external/EditDeleteCaseLog?caseId=${paramValue}`}
                      >
                        <button
                          className="my-btn-danger"
                          onClick={deleteHandler}
                        >
                          Delete
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </Form>
              </MyCardBody>
            </MyCard>
          </Col>
        </Row>
      </div>
    );
  } else {
    return <div>No case Logs</div>;
  }
};
export default EditDeleteCaseLog;
