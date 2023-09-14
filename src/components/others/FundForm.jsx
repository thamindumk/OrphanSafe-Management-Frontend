import React, { useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import { MyCard, MyCardBody, MyCardHeader } from '../MyCard';
import Select from "react-select";
import "../../assets/css/dropdown.css"



const FundForm = () => {
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
        <MyCardHeader>Receive funds form</MyCardHeader>
        <MyCardBody>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Donator's name</Form.Label>
        <Form.Text className="text-muted">
        *name of the Donator
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Supun Kodithuwakku" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCaseName">
        <Form.Label>Date</Form.Label>
        <Form.Text className="text-muted">
        *Date of the fund received
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 2023/08/24" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Text className="text-muted">
        *amount of the fund received
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Rs.30,000" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="caseDescription">
        <Form.Label>Fund description</Form.Label>
        <Form.Text className="text-muted">
        *brief description about the fund received 
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} />
      </Form.Group>

      
      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Fund Documents</Form.Label>
        <Form.Text className="text-muted">
        *documents related to the fund
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
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
  export default FundForm;