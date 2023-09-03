import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";


const PendingCases = () => {
    return (
    <div>
      <Row style={{marginBottom: "10px"}}>
        <Col sm={10}>
        <MyCard>
        <MyCardHeader>Child request form</MyCardHeader>
        </MyCard>
        </Col>
      </Row>
      <Row>
      <Col sm={10}>
        <MyCard>
        <MyCardHeader>Father's Information</MyCardHeader>
        <MyCardBody>
          <Form>
          <Table  responsive bordered  style={{width: "100%"}}>
            <tbody>
                <tr>
                    <td>Name with initials</td>
                    <td>K.D Kariyawasam</td>
                </tr>
                <tr>
                    <td>Occupation</td>
                    <td>Engineering</td>
                </tr>
                <tr>
                    <td>NIC Number</td>
                    <td>200031409645</td>
                </tr>
                <tr>
                    <td>Ethnicity</td>
                    <td>Sinhalese</td>
                </tr>
                <tr>
                    <td>Permanent Address</td>
                    <td>59/C, Punsarawaththa road,     
                    Bekkegama,  
                    Panadura,12500,    
                    Western,     
                    Sri Lanka.
                    </td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td>071934567</td>
                </tr>
                <tr>
                    <td>ID Copy</td>
                    <td><a href="#" class="blue-button">View</a></td>
                </tr>
                <tr>
                    <td>Registration agreement</td>
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