import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import "../../assets/css/child/child.css";
import ViewButton from "../Button";

const ParentDocumentList = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Parents Documents</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table hover style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Birth Certificate of Mother</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Birth Certificate of Father</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Soft copy of NIC of Mother</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Soft copy of NIC of Father</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Marriage Certificate</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Residence Certificate</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Salary Paysheet</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          <ViewButton />
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

export default ParentDocumentList;
