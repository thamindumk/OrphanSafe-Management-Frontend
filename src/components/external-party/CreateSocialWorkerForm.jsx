
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
        <Form.Label>NIC number</Form.Label>
        <Form.Text className="text-muted">
        *national identity card number of the social worker
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

      <Form.Group className="mb-3" controlId="formBasicBirthday">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Text className="text-muted">
        *date of birth
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 1980/04/14" />
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
        *email address of the Social worker
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

      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Text className="text-muted">
        *category of which the social worker belongs.
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. Counseling or Mental Health Services" />
      </Form.Group> */}

      
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
      
      <Form.Group className="mb-3" controlId="medicalHistory">
        <Form.Label>Past experiences</Form.Label>
        <Form.Text className="text-muted">
        *brief description about past experiences related to social work
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} />
      </Form.Group>

      <Form.Label className="form-subtitle">Documents</Form.Label>


      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Birth Certificate</Form.Label>
        <Form.Text className="text-muted">
        *birth certificate of the social worker.
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Soft copy of NIC</Form.Label>
        <Form.Text className="text-muted">
        *soft copy of the social worker national identity card
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Occupation Certificate</Form.Label>
        <Form.Text className="text-muted">
        *occupation Certificate of the social worker
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
      </Form.Group>
      

      



      <Form.Label className="form-subtitle">Create Account</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Text className="text-muted">
        *username of the social worker account
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Text className="text-muted">
        *set temporary password for the social worker account
        </Form.Text>
        <Form.Control type="password" placeholder="***********" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Orphanage Name</Form.Label>
        <Form.Text className="text-muted">
        *name of the orphanage by which the social worker got registered
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
  export default CreateSocialWorkerForm;