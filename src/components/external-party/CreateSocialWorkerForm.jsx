
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";

const CreateSocialWorkerForm = () => {
    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Create social worker profile</MyCardHeader>
        <MyCardBody>
          <Form>
          <Form.Label className="form-subtitle"> Personal Information</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Text className="text-muted">
        *identifier for the social worker
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>ID number</Form.Label>
        <Form.Text className="text-muted">
        *identify card number of the social worker
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 20024502333" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Text className="text-muted">
        *gender
        </Form.Text>
        <Form.Select size="sm" >
        <option ></option>
        <option value="1" >Male</option>
        <option value="2">Female</option>
        <option value="3">Other</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Text className="text-muted">
        *Contact number of the social worker
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 071 1234567" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Text className="text-muted">
        *address of the social worker
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


      <Form.Group className="mb-3" controlId="formBasicOrg">
        <Form.Label>Affiliated organization</Form.Label>
        <Row>
        <Col xs={6}>
            <Form.Label>Organization name</Form.Label>
          <Form.Control type="text" placeholder="e.g. Loins club"/></Col>
        <Col xs={6}><Form.Label>Role/position</Form.Label>
          <Form.Control placeholder="e.g. secretary"/></Col>
        </Row>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Purpose of Interaction</Form.Label>
        <Form.Text className="text-muted">
        *select the primary purpose of your interaction with the orphanage:
        </Form.Text>
        <Form.Check type="checkbox" id="autoSizingCheck1" label="Volunteer Services"/>
        <Form.Check type="checkbox" id="autoSizingCheck2" label="Donation or Fundraising"/>
        <Form.Check type="checkbox" id="autoSizingCheck3" label="Educational Programs"/>
        <Form.Check type="checkbox" id="autoSizingCheck4" label="Counseling or Mental Health Services"/>
        <Form.Control type="text" placeholder=" Other (please specify):" />
      </Form.Group>

      <br/>
      <Form.Label className="form-subtitle"> Background Check and Documentation</Form.Label>
      <Form.Group className="mb-3" controlId="medicalHistory">
        <Form.Label>Past experiences</Form.Label>
        <Form.Text className="text-muted">
        *brief description about past experiences related to social work
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} />
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Identification Documents</Form.Label>
        <Form.Text className="text-muted">
        *documents related to the Social woeker
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
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
  export default CreateSocialWorkerForm;