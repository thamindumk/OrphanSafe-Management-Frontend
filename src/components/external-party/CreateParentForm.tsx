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
            <Form.Label>NIC number</Form.Label>
          <Form.Control placeholder="e.g. 0023345453"/></Col>
        <Col xs={6}><Form.Label>NIC number</Form.Label>
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

      {/* <Form.Group className="mb-3" controlId="formBasicGender">
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
      </Form.Group> */}

<Form.Label className="form-subtitle">Documents</Form.Label>


<Form.Group controlId="formFileLegalDoc" className="mb-3">
<Form.Label>Birth Certificate of Mother</Form.Label>
  <Form.Text className="text-muted">
  *birth certificate of the foster mother.
  </Form.Text>
  <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
</Form.Group>

<Form.Group controlId="formFileLegalDoc" className="mb-3">
<Form.Label>Birth Certificate of Father</Form.Label>
  <Form.Text className="text-muted">
  *birth certificate of the foster father.
  </Form.Text>
  <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
</Form.Group>

<Form.Group controlId="formFileLegalDoc" className="mb-3">
<Form.Label>Soft copy of NIC of Mother</Form.Label>
  <Form.Text className="text-muted">
  *soft copy of the foster mother national identity card
  </Form.Text>
  <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
</Form.Group>

<Form.Group controlId="formFileLegalDoc" className="mb-3">
<Form.Label>Soft copy of NIC of Father</Form.Label>
  <Form.Text className="text-muted">
  *soft copy of the Father national identity card
  </Form.Text>
  <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
</Form.Group>

<Form.Group controlId="formFileLegalDoc" className="mb-3">
<Form.Label>Residence Certificate</Form.Label>
  <Form.Text className="text-muted">
  *residence Certificate of the employee
  </Form.Text>
  <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
</Form.Group>

<Form.Group controlId="formFileLegalDoc" className="mb-3">
<Form.Label>Marriage Certificate</Form.Label>
  <Form.Text className="text-muted">
  *marriage Certificate of parents
  </Form.Text>
  <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
</Form.Group>

<Form.Group controlId="formFileLegalDoc" className="mb-3">
<Form.Label>Salary Pay Sheet</Form.Label>
  <Form.Text className="text-muted">
  *salary pay sheet of parents
  </Form.Text>
  <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
</Form.Group>


      <br/>
      <Form.Label className="form-subtitle"> Adoption/Foster Care Preferences</Form.Label>
      {/* <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label> Type of Placement Preferred</Form.Label>
        <Form.Text className="text-muted">
        *select the types of placement preferred
        </Form.Text>
        <Form.Check type="checkbox" id="autoSizingCheck1" label="Adoption"/>
        <Form.Check type="checkbox" id="autoSizingCheck2" label="Foster Care "/>
        <Form.Check type="checkbox" id="autoSizingCheck3" label=" Either"/>
      </Form.Group> */}

<Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Type of Placement Preferred</Form.Label>
        <Form.Text className="text-muted">
        *select the types of placement preferred
        </Form.Text>
        <Form.Select size="sm" >
        <option ></option>
        <option value="1" >Adoption</option>
        <option value="2">Foster Care</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Age Range of Child Preferred</Form.Label>
        <Form.Text className="text-muted">
        *Give the age range
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 9-15" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender Preference</Form.Label>
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

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Nationality Preference</Form.Label>
        <Form.Text className="text-muted">
        *Give the age range
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. SRi lankan" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Language Preference</Form.Label>
        <Form.Text className="text-muted">
        *Give the age range
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Sinhala" />
      </Form.Group>


     
      

      



      <Form.Label className="form-subtitle">Create Account</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Text className="text-muted">
        *username of the employee account
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Text className="text-muted">
        *set temporary password for the employee account
        </Form.Text>
        <Form.Control type="password" placeholder="***********" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Orphanage Name</Form.Label>
        <Form.Text className="text-muted">
        *name of the orphanage by which the parent got registered
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Little dreams Orphanage" />
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