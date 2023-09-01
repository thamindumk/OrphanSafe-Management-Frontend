import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";


const CreateParentForm = () => {
    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Create Parent profile</MyCardHeader>
        <MyCardBody>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicBirthPlace">
        <Form.Label className="form-subtitle">Parents Details</Form.Label>
        <Form.Text className="text-muted">
        *names of child's parents
        </Form.Text>
        <Row>
        <Col xs={6}>
            <Form.Label>Foster father's name</Form.Label>
          <Form.Control placeholder="e.g. Sunil Perera"/></Col>
        <Col xs={6}><Form.Label>Foster mother's name</Form.Label>
          <Form.Control placeholder="e.g. Kumudi Perera"/></Col>
        </Row>
        <Row >
        <Col xs={6}>
            <Form.Label>ID number</Form.Label>
          <Form.Control placeholder="e.g. 0023345453"/></Col>
        <Col xs={6}><Form.Label>ID number</Form.Label>
          <Form.Control placeholder="e.g. 0023345453"/></Col>
        </Row>
        <Row>
        <Col xs={6}>
            <Form.Label>Mobile Number</Form.Label>
          <Form.Control placeholder="e.g. 071 2345678"/></Col>
        <Col xs={6}><Form.Label>Mobile Number</Form.Label>
          <Form.Control placeholder="e.g. 071 2345678"/></Col>
        </Row>
        <Row>
        <Col xs={6}>
            <Form.Label>Date of Birth</Form.Label>
          <Form.Control placeholder="e.g. 1984/06/27"/></Col>
        <Col xs={6}><Form.Label>Date of Birth</Form.Label>
          <Form.Control placeholder="e.g. 1984/06/27"/></Col>
        </Row>

        <Row>
        <Col xs={6}>
            <Form.Label>Occupation</Form.Label>
          <Form.Control placeholder="e.g. Manager"/></Col>
        <Col xs={6}><Form.Label>Occupation</Form.Label>
          <Form.Control placeholder="e.g. Teacher"/></Col>
        </Row>
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Text className="text-muted">
        *address of the parents
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Panadura,Kaluthara" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Text className="text-muted">
        *email address of the employee
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. example@email.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Marital Status</Form.Label>
        <Form.Text className="text-muted">
        *Marital Status of the parents
        </Form.Text>
        <Form.Select size="sm" >
        <option ></option>
        <option value="1" >Single</option>
        <option value="2">Married</option>
        <option value="3">Divorced</option>
        <option value="4">Widowed</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Identification Documents</Form.Label>
        <Form.Text className="text-muted">
        *documents related to the Social worker
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
      </Form.Group>

      <br/>
      <Form.Label className="form-subtitle"> Adoption/Foster Care Preferences</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label> Type of Placement Preferred</Form.Label>
        <Form.Text className="text-muted">
        *select the types of placement preferred
        </Form.Text>
        <Form.Check type="checkbox" id="autoSizingCheck1" label="Adoption"/>
        <Form.Check type="checkbox" id="autoSizingCheck2" label="Foster Care "/>
        <Form.Check type="checkbox" id="autoSizingCheck3" label=" Either"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Age Range of Child Preferred</Form.Label>
        <Form.Text className="text-muted">
        *Give the age range
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 9-15" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender of Child Preferred</Form.Label>
        <Form.Text className="text-muted">
        *gender
        </Form.Text>
        <Form.Select size="sm" >
        <option ></option>
        <option value="1" >Male</option>
        <option value="2">Female</option>
        <option value="3"> No Preference</option>
        </Form.Select>
      </Form.Group>


     
      

      



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Text className="text-muted">
        *set password for the employee
        </Form.Text>
        <Form.Control type="password" placeholder="***********" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Text className="text-muted">
        *confirm the password for the employee
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
  export default CreateParentForm;