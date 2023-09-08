import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";

const ParentProfileContent = () => {
  return (
    <div>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Personal Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Name with initials</td>
                      <td className="td">K.D Kariyawasam</td>
                    </tr>
                    <tr>
                      <td className="td">Birth Day</td>
                      <td className="td">1985/10/13</td>
                    </tr>
                    <tr>
                      <td className="td">NIC number</td>
                      <td className="td">8524325432</td>
                    </tr>
                    <tr>
                      <td className="td">Mobile number</td>
                      <td className="td">0765646543</td>
                    </tr>
                    <tr>
                      <td className="td">Occupation</td>
                      <td className="td">Engineer</td>
                    </tr>
                    <tr>
                      <td className="td">Email</td>
                      <td className="td">Kariyawasankd@gmail.com</td>
                    </tr>
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Personal Documents</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">NIC copy</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Birthday certificate</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">yearly paysheet</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};

export default ParentProfileContent;
