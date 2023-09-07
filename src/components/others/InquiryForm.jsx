import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";

const InquiryForm = () => {
    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Create Inquiries</MyCardHeader>
        <MyCardBody>
          <Form>
          <Form.Label className="form-subtitle"> Personal Information</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Text className="text-muted">
        *identifier for the user
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>ID number</Form.Label>
        <Form.Text className="text-muted">
        *identify card number of the User
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. ST-20024" />
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Text className="text-muted">
        *subject of the inquiry
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. example@email.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="medicalHistory">
        <Form.Label>Inquiry  Message</Form.Label>
        <Form.Text className="text-muted">
        *brief description about the inquiry
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} />
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Inquiry Documents</Form.Label>
        <Form.Text className="text-muted">
        *documents related to the inquiry
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
  export default InquiryForm;