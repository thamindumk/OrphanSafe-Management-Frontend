import { toast } from "react-toastify";
import { useCreateStaffProfileMutation } from "../../slices/profileApiSlice";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import { useState } from "react";

const DeleteChild = () => {
//   const [username, setUsername] = useState("");
//   const [name,setName]= useState("");
//   const [phoneNumber,setPhoneNumber]= useState("");
  

//   const [registerStaff, { isLoading, isError, isSuccess }] =
//   useCreateStaffProfileMutation();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("otherInfo", JSON.stringify({
//         username: username,
//         name: name,
//         phoneNumber: phoneNumber,
//         email: email,
//         password: password,
//         OrphanageName: OrphanageName,
//         address: address,
//         nic: nic,
//         gender: gender,
//         dob: dob,
//         employeeType:employeeType,
        
//       }));
//       const res = await registerStaff(formData).unwrap();

//       toast.success(" Staff profile Registration completed");
//     } catch (error) {
//       toast.error(error.data.message);
//     }
//   };


    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Delete child profile</MyCardHeader>
        <MyCardBody>
          <Form onSubmit={submitHandler}>
      <Form.Label className="form-subtitle">Create Account</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Commit Message</Form.Label>
        <Form.Text className="text-muted">
        *Reason for deleting the profile
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. full name" 
        onChange={(e) => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStaffName">
        <Form.Label> Commited By</Form.Label>
        <Form.Text className="text-muted">
        *name of the person who delete the child profile
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. Little dreams Orphanage" 
        onChange={(e) => setOrphanageName(e.target.value)}/>
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
  export default DeleteChild;