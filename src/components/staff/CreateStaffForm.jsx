

import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";

const CreateStaffForm = () => {
    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Create staff profile</MyCardHeader>
        <MyCardBody>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Text className="text-muted">
        *identifier for the employee
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

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Text className="text-muted">
        *address of the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Panadura,Kaluthara" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Type of the employee</Form.Label>
        <Form.Text className="text-muted">
        *select the type of the employee
        </Form.Text>
        
        <Form.Select >
        <option placeholder="e.g. Normal Form"></option>
        <option value="1">Normal staff</option>
        <option value="2">Orphanege Manager</option>
        <option value="3">Orphanege assistant Manger</option>
        </Form.Select>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>ID number</Form.Label>
        <Form.Text className="text-muted">
        *identify card number of the employee
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 20024502333" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Text className="text-muted">
        *email address of the employee
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. example@email.com" />
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
  export default CreateStaffForm;