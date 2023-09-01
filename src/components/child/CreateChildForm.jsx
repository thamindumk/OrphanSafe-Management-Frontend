

import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";

const CreateStaffForm = () => {
    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Create Child profile</MyCardHeader>
        <MyCardBody>
          <Form>
          <Form.Label className="form-subtitle">Child Information</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Text className="text-muted">
        *identifier for the child
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Text className="text-muted">
        *date of birth
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 1980/04/14" />
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

      <Form.Group className="mb-3" controlId="formBasicBirthPlace">
        <Form.Label>Place of birth</Form.Label>
        <Form.Text className="text-muted">
        *Place of birth of the child
        </Form.Text>
        <Row>
        <Col xs={6}>
            <Form.Label>City</Form.Label>
          <Form.Control placeholder="e.g. Panadura"/></Col>
        <Col xs={6}><Form.Label>District</Form.Label>
          <Form.Control placeholder="e.g. Kaluthara"/></Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNationality">
        <Form.Label>Nationality</Form.Label>
        <Form.Text className="text-muted">
        *nationality of the child
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Sri Lankan" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicReligion">
        <Form.Label>Religion</Form.Label>
        <Form.Text className="text-muted">
        *religion of the child
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Buddhist" />
      </Form.Group>



      <Form.Label className="form-subtitle">Contact Information</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Current Address</Form.Label>
        <Form.Text className="text-muted">
        *Current address of the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Panadura,Kaluthara" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Contact Phone Number</Form.Label>
        <Form.Text className="text-muted">
        *Contact phone number of the child
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 034 22 333456" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Text className="text-muted">
        *email address of the employee
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. example@email.com" />
      </Form.Group>



      <Form.Label className="form-subtitle">Health Information</Form.Label>
      <Form.Group className="mb-3" controlId="medicalHistory">
        <Form.Label>Medical History</Form.Label>
        <Form.Text className="text-muted">
        *brief description of any medical conditions or allergies
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} />
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Medical Documents History</Form.Label>
        <Form.Text className="text-muted">
        *documents related to the medical history
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
      </Form.Group>



      <Form.Label className="form-subtitle">Education</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicSchool">
        <Form.Label>School</Form.Label>
        <Form.Text className="text-muted">
        *school name the child is currently studying
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Panadura College" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGrade">
        <Form.Label>Grade/class</Form.Label>
        <Form.Text className="text-muted">
        *current grade the child is studying
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Grade 3" />
      </Form.Group>


      <Form.Label className="form-subtitle">Family Background</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicBirthPlace">
        <Form.Label>Parents Names</Form.Label>
        <Form.Text className="text-muted">
        *names of child's parents
        </Form.Text>
        <Row>
        <Col xs={6}>
            <Form.Label>Father's Name</Form.Label>
          <Form.Control placeholder="e.g. Sunil Perera"/></Col>
        <Col xs={6}><Form.Label>Mother's Name</Form.Label>
          <Form.Control placeholder="e.g. Kumudi Perera"/></Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGrade">
        <Form.Label>Reason for Placement</Form.Label>
        <Form.Text className="text-muted">
        *brief explanation of why the child is under the care of the orphanage
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} />
      </Form.Group>

      <Form.Label className="form-subtitle">Additional Information</Form.Label>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Photograph</Form.Label>
        <Form.Text className="text-muted">
        *upload a recent photograph of the child
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLanguage">
        <Form.Label>Preferred Language</Form.Label>
        <Form.Text className="text-muted">
        *Language the child is most comfortable with
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Sinhala" />
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Legal Documents</Form.Label>
        <Form.Text className="text-muted">
        *legal documents related to the child are uploaded here.
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGrade">
        <Form.Label>Case Notes</Form.Label>
        <Form.Text className="text-muted">
        *brief explanation of any cases that are related to the child
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Notes or Comments</Form.Label>
        <Form.Text className="text-muted">
        *Any additional comments or observations related to the child
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} style={{ height: "100px" }} />
      </Form.Group>

      <Form.Label className="form-subtitle">Guardian/Staff Information</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Guardian/Staff Name</Form.Label>
        <Form.Text className="text-muted">
        *name of the staff member or guardian 
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Kalum Gamage" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Guardian/Staff Contact Number</Form.Label>
        <Form.Text className="text-muted">
        *contact number of the staff member or guardian 
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 071 345678" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Relationship to Child</Form.Label>
        <Form.Text className="text-muted">
        *The guardian's relationship to the child
        </Form.Text>
        <Form.Control type="text" placeholder="e.g., staff member, legal guardian" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Orphanage Name</Form.Label>
        <Form.Text className="text-muted">
        *name of the orphanage that the child is assigned
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
  export default CreateStaffForm;