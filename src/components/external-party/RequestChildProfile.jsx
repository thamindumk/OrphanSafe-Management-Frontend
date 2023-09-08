import React, { useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import { MyCard, MyCardBody, MyCardHeader } from '../MyCard';
import Select from "react-select";
import "../../assets/css/dropdown.css"

const RequestChildProfile = () => {
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
        <MyCardHeader>Request Child Profile Form</MyCardHeader>
        <MyCardBody>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Child Name and ID</Form.Label>
        <Form.Text className="text-muted">
        *Select the child
        </Form.Text>
       
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select child"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
   
      </Form.Group>

      <Form.Group className="mb-3" controlId="medicalHistory">
        <Form.Label>Reason for request</Form.Label>
        <Form.Text className="text-muted">
        *brief description of the reason for requesting the child profile.
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
  export default RequestChildProfile;