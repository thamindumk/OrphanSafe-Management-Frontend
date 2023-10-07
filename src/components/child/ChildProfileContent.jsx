import React from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../../components/MyCard";
import {
  useViewChildProfilesQuery,
} from "../../slices/profileApiSlice";

const ChildProfileContent = () => {
  
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("childId");
  const {data, isLoading,isError,isSuccess}=
  useViewChildProfilesQuery(paramValue);

  return isSuccess && (
    <div>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Child Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                 
                    <tr>
                      <td className="td">Name with initials</td>
                      <td className="td">{data.childProfile.FullName}</td>
                    </tr>
                    <tr>
                      <td className="td">Birth Day</td>
                      <td className="td">{data.childProfile.DOB}</td>
                    </tr>
                    <tr>
                      <td className="td">Gender</td>
                      <td className="td">{data.childProfile.Gender}</td>
                    </tr>
                    <tr>
                      <td className="td">Birth City</td>
                      <td className="td">{data.childProfile.City}</td>
                    </tr>
                    
                    <tr>
                      <td className="td">Nationality</td>
                      <td className="td">{data.childProfile.Nationality}</td>
                    </tr>
                    <tr>
                      <td className="td">Language</td>
                      <td className="td">{data.childProfile.Language}</td>
                    </tr>
                    
                    
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Additional Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                 
                    <tr>
                      <td className="td">Medical history</td>
                      <td className="td">{data.childProfile.MedicalDesc}</td>
                    </tr>
                    <tr>
                      <td className="td">Remarks</td>
                      <td className="td">{data.childProfile.Remark}</td>
                    </tr>
                    <tr>
                      <td className="td">Reason for Placement</td>
                      <td className="td">{data.childProfile.ReasonForPlacement}</td>
                    </tr>
                    {/* <tr>
                      <td className="td">Medical Documents</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr> */}
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
      
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Family Background</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td className="td">Father's Name</td>
                      <td className="td">{data.childProfile.BirthFather}</td>
                    </tr>
                    <tr>
                      <td className="td">Mother's Name</td>
                      <td className="td">{data.childProfile.BirthMother}</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
      <Row>
        <Col sm={0} md={1} lg={1}></Col>
        <Col sm={12} md={10} lg={10}>
          <MyCard>
            <MyCardHeader>Registration Information</MyCardHeader>
            <MyCardBody>
              <Form>
                <Table responsive bordered>
                  <tbody>
                    <tr>
                      <td className="td">Date Of Admission</td>
                      <td className="td">{data.childProfile.DateOfAdmission}</td>
                    </tr>
                    <tr>
                      <td className="td">Orphanage Name</td>
                      <td className="td">{data.childProfile.OrphanageName}</td>
                    </tr>
                    {/* <tr>
                      <td className="td">Guardian Contact Number</td>
                      <td className="td">0765648734</td>
                    </tr>
                    <tr>
                      <td className="td">Guardian relationship to the child</td>
                      <td className="td">Staff member</td>
                    </tr>
                    <tr>
                      <td className="td">Legal Documents</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Cases</td>
                      <td className="td">
                        <a href="#" class="blue-button">
                          View
                        </a>
                      </td>
                    </tr> */}
                  </tbody>
                </Table>
              </Form>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};

export default ChildProfileContent;
