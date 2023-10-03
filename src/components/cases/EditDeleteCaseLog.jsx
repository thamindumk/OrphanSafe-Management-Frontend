import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import { useSelector } from "react-redux";

const EditDeleteCaseLog = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <Row style={{ marginBottom: "10px" }}>
        <Col sm={5}>
          <div class="d-flex ">
            <button class="my-btn">Previous Case Log</button>
          </div>
        </Col>
        <Col sm={5}>
          <div class="d-flex justify-content-end">
            <button class="my-btn">Next Case Log</button>
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
                      <td>Case Number</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>Case Name</td>
                      <td>Child Welfare Case</td>
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
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="mt-1"></div>
                {userInfo.roleName == "socialWorker" ? (
                  <div className="d-flex justify-content-end mt-4">
                    <button className="my-btn mr-2">Edit</button>
                    <button className="my-btn-danger">Delete</button>
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
};
export default EditDeleteCaseLog;
