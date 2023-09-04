import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import "../../assets/css/child/child.css";

const ChildProfileContent = () => {
  return (
    <div>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Child Information</MyCardHeader>
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
                      <td className="td">2007/10/13</td>
                    </tr>
                    <tr>
                      <td className="td">Gender</td>
                      <td className="td">Male</td>
                    </tr>
                    <tr>
                      <td className="td">Birth place</td>
                      <td className="td">Panadura, Kalutara</td>
                    </tr>
                    <tr>
                      <td className="td">Nationality</td>
                      <td className="td">Sri Lankan</td>
                    </tr>
                    <tr>
                      <td className="td">Religion</td>
                      <td className="td">Buddhist</td>
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
            <MyCardHeader>Medical Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Medical history</td>
                      <td className="td">
                        There is a pain in left leg for three years
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Medical Documents</td>
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
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Education Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Sclool</td>
                      <td className="td">KL/dharmapaka primary school</td>
                    </tr>
                    <tr>
                      <td className="td">Current grade</td>
                      <td className="td">Grade 4</td>
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
            <MyCardHeader>Family Background</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Father's Name</td>
                      <td className="td">Nimal Siripala</td>
                    </tr>
                    <tr>
                      <td className="td">Mother's Name</td>
                      <td className="td">D.Kusumawathi</td>
                    </tr>
                    <tr>
                      <td className="td">Reason for Placement</td>
                      <td className="td">poverty of the parents</td>
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
            <MyCardHeader>Additional Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered>
                  <tbody>
                    <tr>
                      <td className="td">Prefered Language</td>
                      <td className="td">Sinhala</td>
                    </tr>
                    <tr>
                      <td className="td">Guardian Name</td>
                      <td className="td">S.D.Kasun Kalhara</td>
                    </tr>
                    <tr>
                      <td className="td">Guardian Contact Number</td>
                      <td className="td">0765648734</td>
                    </tr>
                    <tr>
                      <td className="td">Guardian relationship to the child</td>
                      <td className="td">Staff member</td>
                    </tr>
                    <tr>
                      <td className="td">Legal Documents</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Cases</td>
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

export default ChildProfileContent;
