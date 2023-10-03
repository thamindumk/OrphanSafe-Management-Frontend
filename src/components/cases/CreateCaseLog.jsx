import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";

const CreateCaseLogs = () => {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const optionList = [
    { value: "medical check up", label: "Medical check up" },
    { value: "property case", label: "Property case" },
    { value: "mental checkup", label: "Mental checkup" },
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <Row>
      <Col sm={7}>
        <MyCard>
          <MyCardHeader>Create Case Log Form</MyCardHeader>
          <MyCardBody>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Case Name</Form.Label>
                <Form.Text className="text-muted">
                  *Select the Case Name
                </Form.Text>
                <div className="dropdown-container">
                  <Select
                    options={optionList}
                    placeholder="Select child"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCaseName">
                <Form.Label>Case log name</Form.Label>
                <Form.Text className="text-muted">
                  *name of the case log
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. Adoption case" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="caseDescription">
                <Form.Label>Case log description</Form.Label>
                <Form.Text className="text-muted">
                  *brief description about the case
                </Form.Text>
                <Form.Control size="sm" as="textarea" rows={8} />
              </Form.Group>

              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Case log Documents</Form.Label>
                <Form.Text className="text-muted">
                  *documents related to the Case log
                </Form.Text>
                <Form.Control
                  type="file"
                  multiple
                  size="sm"
                  style={{ padding: "0.05rem 0.3rem 0.2rem 0.3rem" }}
                />
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
export default CreateCaseLogs;
