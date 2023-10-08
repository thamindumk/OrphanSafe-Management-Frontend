
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { useEditSocialWorkerProfileMutation,useViewSocialWorkerProfilesQuery } from "../../slices/profileApiSlice";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateSocialWorkerForm = () => {
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("workerId");


  const [name,setName]= useState("");
  const [phoneNumber,setPhoneNumber]= useState("");
  const [email,setEmail]= useState("");
  const [OrphanageName,setOrphanageName]= useState("");
  const [address,setAddress]= useState("");
  const [nic,setNic]= useState("");
  const [gender,setGender]= useState("");
  const [dob,setDOB]= useState("");
  const [Category,setCategory]= useState("");
  const [Organization,setOrganization]= useState("");
  const [Role,setRole]= useState("");
  const [Experience,setExperience]= useState("");

  const [NICDoc,setNICDoc]= useState(null);
  const [BirthCertificate,setBirthCertificate]= useState(null);
  const [OccupationCertificate,setOccupationCertificate]= useState(null);
 

  const {data, isLoading,isError,isSuccess}=
  useViewSocialWorkerProfilesQuery(paramValue);

  const [editSocialWorker]=useEditSocialWorkerProfileMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("NICDoc", NICDoc);
      formData.append("BirthCertificate", BirthCertificate);
      formData.append("OccupationCertificate", OccupationCertificate);
      formData.append("otherInfo", JSON.stringify({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        OrphanageName: OrphanageName,
        address: address,
        nic: nic,
        gender: gender,
        dob: dob,
        Category:Category,
        Organization: Organization,
        Role: Role,
        Experience: Experience,
        
      }));
      const res = await editSocialWorker(formData).unwrap();

      toast.success(" Staff profile Registration completed");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

    return isSuccess && (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Edit social worker profile</MyCardHeader>
        <MyCardBody>
          <Form onSubmit={submitHandler}>
          <Form.Label className="form-subtitle"> Personal Information</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Text className="text-muted">
        *identifier for the social worker
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name" 
        onChange={(e) => setName(e.target.value)}
        defaultValue={data.socialWorkerProfile.Name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>NIC number</Form.Label>
        <Form.Text className="text-muted">
        *national identity card number of the social worker
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 20024502333" 
        onChange={(e) => setNic(e.target.value)}
        defaultValue={data.socialWorkerProfile.NIC}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Text className="text-muted">
        *gender
        </Form.Text>
        <Form.Select size="sm" 
        onChange={(e) => setGender(e.target.value)}
        defaultValue={data.socialWorkerProfile.Gender}>
        <option ></option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Text className="text-muted">
        *Contact number of the social worker
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. 071 1234567" 
        onChange={(e) => setPhoneNumber(e.target.value)}
        defaultValue={data.socialWorkerProfile.PhoneNumber}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicdob">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Text className="text-muted">
        *Date of birth of the social worker
        </Form.Text>
        <Form.Control
        type="date"
        placeholder="Date of birth"
        onChange={(e) => setDOB(e.target.value)}
        defaultValue={data.socialWorkerProfile.DOB}
        />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Text className="text-muted">
        *address of the social worker
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Panadura,Kaluthara"
        onChange={(e) => setAddress(e.target.value)} 
        defaultValue={data.socialWorkerProfile.Address}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Text className="text-muted">
        *email address of the Social worker
        </Form.Text>
        <Form.Control type="email" placeholder="e.g. example@email.com" 
        onChange={(e) => setEmail(e.target.value)}
        defaultValue={data.socialWorkerProfile.Email}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicOrg">
        <Form.Label>Affiliated organization</Form.Label>
        <Row>
        <Col xs={6}>
            <Form.Label>Organization name</Form.Label>
          <Form.Control type="text" placeholder="e.g. Loins club"
          onChange={(e) => setOrganization(e.target.value)}
          defaultValue={data.socialWorkerProfile.Organization}/></Col>
        <Col xs={6}><Form.Label>Role/position</Form.Label>
          <Form.Control placeholder="e.g. secretary"
          onChange={(e) => setRole(e.target.value)}
          defaultValue={data.socialWorkerProfile.Role}/></Col>
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
        {/* <Form.Check type="checkbox" id="autoSizingCheck1" label="Volunteer Services"/>
        <Form.Check type="checkbox" id="autoSizingCheck2" label="Donation or Fundraising"/>
        <Form.Check type="checkbox" id="autoSizingCheck3" label="Educational Programs"/>
        <Form.Check type="checkbox" id="autoSizingCheck4" label="Counseling or Mental Health Services"/> */}
        {/* <Form.Control type="text" placeholder=" Other (please specify):" 
        onChange={(e) => setName(e.target.value)}/> */}
        <Form.Control type="text" placeholder=" Counseling or Mental Health Services" 
        onChange={(e) => setCategory(e.target.value)}
        defaultValue={data.socialWorkerProfile.Category}/>
      </Form.Group> 

      <br/>
      
      <Form.Group className="mb-3" controlId="medicalHistory">
        <Form.Label>Past experiences</Form.Label>
        <Form.Text className="text-muted">
        *brief description about past experiences related to social work
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} 
        onChange={(e) => setExperience(e.target.value)}
        defaultValue={data.socialWorkerProfile.Experience}/>
      </Form.Group>

      <Form.Label className="form-subtitle">Documents</Form.Label>


      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Birth Certificate</Form.Label>
        <Form.Text className="text-muted">
        *birth certificate of the social worker.
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setBirthCertificate(e.target.files[0])}/>
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Soft copy of NIC</Form.Label>
        <Form.Text className="text-muted">
        *soft copy of the social worker national identity card
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setNICDoc(e.target.files[0])}/>
      </Form.Group>

      <Form.Group controlId="formFileLegalDoc" className="mb-3">
      <Form.Label>Occupation Certificate</Form.Label>
        <Form.Text className="text-muted">
        *occupation Certificate of the social worker
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}
        onChange={(e) => setOccupationCertificate(e.target.files[0])}/>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Orphanage Name</Form.Label>
        <Form.Text className="text-muted">
        *name of the orphanage by which the social worker got registered
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Little dreams Orphanage" 
        onChange={(e) => setOrphanageName(e.target.value)}
        defaultValue={data.socialWorkerProfile.OrphanageName}/>
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