import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";

const CaseOverviewCard = () => {
  return (
    <div>
      <Row>
        <Col sm={10}>
          <MyCard>
            <MyCardHeader>Case Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td>Case ID</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Case Discription</td>
                      <td>
                        medical check up about eyes and get a report of medical
                        condition of the child
                      </td>
                    </tr>
                    <tr>
                      <td>Child ID</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Child Name</td>
                      <td>Eranga Malshan</td>
                    </tr>
                    <tr>
                      <td>Last Update</td>
                      <td>2021/03/08</td>
                    </tr>
                    <tr>
                      <td>Started date</td>
                      <td>2018/12/03</td>
                    </tr>
                    <tr>
                      <td>Assigned Worker</td>
                      <td>K.P.Lalith</td>
                    </tr>
                    <tr>
                      <td>Assigned by</td>
                      <td>K.S.Piyal Gamlath</td>
                    </tr>
                    <tr>
                      <td>Case logs</td>
                      <td>
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

export default CaseOverviewCard;
