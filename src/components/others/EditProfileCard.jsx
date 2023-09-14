import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";

const EditProfileCard = () => {
  return (
    <Row>
      <Col sm={7}>
        <MyCard>
          <MyCardHeader></MyCardHeader>
          <MyCardBody>
            <Form>
              <Form.Label className="form-subtitle">
                {" "}
                Change User Information
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Change Email</Form.Label>
                <Form.Text className="text-muted">
                  *current email address in the below
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="piyalgamlath@gmail.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Text className="text-muted">
                  *set new password for the employee
                </Form.Text>
                <Form.Control type="password" placeholder="***********" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Text className="text-muted">
                  *confirm the passowrd for the employee
                </Form.Text>
                <Form.Control type="password" placeholder="***********" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};

export default EditProfileCard;
