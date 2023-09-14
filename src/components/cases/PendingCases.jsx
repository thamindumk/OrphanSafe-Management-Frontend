import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";


const PendingCases = () => {
    return (
    <div>
      {/* <Row style={{marginBottom: "10px"}}>
        <Col sm={10}>
        <MyCard>
        <MyCardHeader>Approval Page</MyCardHeader>
        </MyCard>
        </Col>
      </Row> */}
      <Row>
      <Col sm={10}>
        <MyCard>
        <MyCardHeader>Case Information Request</MyCardHeader>
        <MyCardBody>
          <Form>
          <Table  responsive bordered  style={{width: "100%"}}>
            <tbody>
                <tr>
                    <td>Name with initials</td>
                    <td>K.D Kariyawasam</td>
                </tr>
                <tr>
                    <td>Parent ID</td>
                    <td>P-456</td>
                </tr>
                <tr>
                    <td>Requested child profile ID</td>
                    <td>CH-456</td>
                </tr>
                <tr>
                    <td>Requested child profile name</td>
                    <td>Kalum gamage</td>
                </tr>
                <tr>
                    <td>Reason for request</td>
                    <td>Get an idea about the cases related to the child.
                    </td>
                </tr>
               
                <tr>
                    <td>Documents</td>
                    <td><a href="#" class="blue-button">View</a></td>
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
  };
  export default PendingCases;