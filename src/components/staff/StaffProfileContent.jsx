import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";

const StaffProfileContent = () => {
  return (
    <div>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Employee Information</MyCardHeader>
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
                      <td className="td">1980/10/13</td>
                    </tr>
                    <tr>
                      <td className="td">Gender</td>
                      <td className="td">Male</td>
                    </tr>
                    <tr>
                      <td className="td">Type of Employee</td>
                      <td className="td">Orphanage manager</td>
                    </tr>
                    <tr>
                      <td className="td">Address</td>
                      <td className="td">
                        7A/3 , Kahatawatta, Panadura, Kalutara
                      </td>
                    </tr>

                    <tr>
                      <td className="td">NIC number</td>
                      <td className="td">8025102799</td>
                    </tr>
                    <tr>
                      <td className="td">Email</td>
                      <td className="td">kariyawasamkd@gmail.com</td>
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

export default StaffProfileContent;
