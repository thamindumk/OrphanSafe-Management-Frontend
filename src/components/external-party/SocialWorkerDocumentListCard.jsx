import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import ViewButton from "../Button";

const SocialWorkerDocumentListCard = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Social worker Documents</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table hover style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td classN="td">Birth Certificate</td>
                      <td classN="td">
                        <a href="#" className="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td classN="td">Soft copy of NIC</td>
                      <td classN="td">
                        <a href="#" className="blue-button">
                          <ViewButton />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td classN="td">Occupation Certificate</td>
                      <td classN="td">
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

export default SocialWorkerDocumentListCard;
