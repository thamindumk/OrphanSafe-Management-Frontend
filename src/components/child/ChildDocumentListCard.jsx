import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import ViewButton from "../Button";

const ChildDocumentListCard = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>child Documents</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table hover style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Birth Certificate</td>
                      <td className="td">
                        <a href="#" className="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Medical Report</td>
                      <td className="td">
                        <a href="#" className="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Mother's Birth Certificate</td>
                      <td className="td">
                        <a href="#" className="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Father's Birth Certificate</td>
                      <td className="td">
                        <a href="#" className="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">
                        Child Protection Authority Certififcate
                      </td>
                      <td className="td">
                        <a href="#" className="blue-button">
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

export default ChildDocumentListCard;
