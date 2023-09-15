import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../components/MyCard";

const OrphanageRegistration = () => {
  return (
    <Row>
      <Col sm={3}> </Col>
      <Col sm={6}>
        <MyCard>
          <MyCardHeader>
            Register an Orphanage on OrphanSafe platform
          </MyCardHeader>
          <MyCardBody>
            <Form>
              <Form.Label className="form-subtitle">
                Orphanage Information
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Text className="text-muted">
                  *identifier for the orphanage
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. name of the orphanage"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRegisterDate">
                <Form.Label>Registered Date</Form.Label>
                <Form.Text className="text-muted">
                  *date of registration
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. 1980/04/14" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRegisterDate">
                <Form.Label>Capacity</Form.Label>
                <Form.Text className="text-muted">
                  *how many children can stay there
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. 100" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRegID">
                <Form.Label>Registration ID</Form.Label>
                <Form.Text className="text-muted">
                  *given registration ID from child protection authority
                </Form.Text>
                <Form.Control type="text" placeholder="WP-KL-14515" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Text className="text-muted">
                  *Address of the orphanage
                </Form.Text>
                <Row>
                  <Col xs={6}>
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="e.g. Panadura" />
                  </Col>
                  <Col xs={6}>
                    <Form.Label>District</Form.Label>
                    <Form.Control placeholder="e.g. Kaluthara" />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Label className="form-subtitle">
                Contact Information of the founder
              </Form.Label>

              <Form.Group className="mb-3" controlId="formBasicNameOfFounder">
                <Form.Label>Name</Form.Label>
                <Form.Text className="text-muted">
                  *name of the founder or organization
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. S.K.Sumanasekara or ABCD Pvt"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Current Address</Form.Label>
                <Form.Text className="text-muted">
                  *Current address of the founder or organization
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="e.g. 5/117,Panadura,Kaluthara"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Contact Phone Number</Form.Label>
                <Form.Text className="text-muted">
                  *Contact phone number of the founder
                </Form.Text>
                <Form.Control type="text" placeholder="e.g. 034 22 333456" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Text className="text-muted">
                  *email address of the orphanage
                </Form.Text>
                <Form.Control
                  type="email"
                  placeholder="e.g. example@email.com"
                />
              </Form.Group>

              <Form.Label className="form-subtitle">
                Required documents
              </Form.Label>

              <Form.Group controlId="formFileReg" className="mb-3">
                <Form.Label>Certificate of registration</Form.Label>
                <Form.Text className="text-muted">
                  *upload a pdf document of the certificate of registration that
                  is issued by the child protection authority
                </Form.Text>
                <Form.Control
                  type="file"
                  multiple
                  size="sm"
                  style={{ padding: "0.1rem 0.3rem 0.2rem 0.3rem" }}
                />
              </Form.Group>

              <Form.Group controlId="formFilePlan" className="mb-3">
                <Form.Label>House Plan</Form.Label>
                <Form.Text className="text-muted">
                  *house plan of the orphanage building are uploaded here.
                </Form.Text>
                <Form.Control
                  type="file"
                  multiple
                  size="sm"
                  style={{ padding: "0.05rem 0.3rem 0.2rem 0.3rem" }}
                />
              </Form.Group>

              <Form.Group controlId="formFileLand" className="mb-3">
                <Form.Label>Land report</Form.Label>
                <Form.Text className="text-muted">
                  *land report of the orphanage land are uploaded here.
                </Form.Text>
                <Form.Control
                  type="file"
                  multiple
                  size="sm"
                  style={{ padding: "0.05rem 0.3rem 0.2rem 0.3rem" }}
                />
              </Form.Group>

              <Form.Label className="form-subtitle">
                For Authorization
              </Form.Label>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Text className="text-muted">
                  *create a strong password for login purposes
                </Form.Text>
                <Form.Control type="password" placeholder="password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Text className="text-muted">
                  *confirm the password
                </Form.Text>
                <Form.Control type="password" placeholder="confirm password" />
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

export default OrphanageRegistration
;
