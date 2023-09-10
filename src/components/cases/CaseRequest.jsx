import React, { useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import { MyCard, MyCardBody, MyCardHeader } from '../MyCard';
import Select from "react-select";
import "../../assets/css/dropdown.css"



const CaseRequest = () => {
    // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const optionList = [
    { value: "child1", label: "child1" },
    { value: "child2", label: "child2" },
    { value: "child3", label: "child3" },
    { value: "child4", label: "child4" },
    { value: "child5", label: "child5" }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Case Request Form</MyCardHeader>
        <MyCardBody>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicCaseName">
        <Form.Label>Subject</Form.Label>
        <Form.Text className="text-muted">
        *subject for the request
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Adoption case" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="caseDescription">
        <Form.Label>Request</Form.Label>
        <Form.Text className="text-muted">
        *brief description about the request
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} />
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
  export default CaseRequest;