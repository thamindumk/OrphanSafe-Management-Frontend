import React, { useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import { MyCard, MyCardBody, MyCardHeader } from '../MyCard';
import Select from "react-select";
import "../../assets/css/dropdown.css";
import { useBulkResponseMutation } from "../../slices/adminApiSlice";
import { useLocation } from 'react-router-dom';
import { toast } from "react-toastify";



const ResponseBulkForm = () => {
  const [Subject, setSubject] = useState("");
  const [Description,setDescription]= useState("");
  const [CreateResponse, { isLoading, isError, isSuccess }] =
  useBulkResponseMutation();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const selectedValues = searchParams.get('selected');
  const selectedItems = selectedValues ? selectedValues.split(',') : [];

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await CreateResponse({
        Subject: Subject,
        Description: Description,
        Emails:selectedValues,
        
      }).unwrap();

      toast.success(" Create Response completed");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

    return (
      <Row>
        <Col sm={7}>
        <MyCard>
        <MyCardHeader>Bulk Response Form</MyCardHeader>
        <MyCardBody>
        <Form onSubmit={submitHandler}>



      <Form.Group className="mb-3" controlId="formBasicCaseName">
        <Form.Label>Response subject</Form.Label>
        <Form.Text className="text-muted">
        *subject of the response
        </Form.Text>
        <Form.Control type="text" placeholder="e.g. support request" 
        onChange={(e) => setSubject(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="caseDescription">
        <Form.Label>Response description</Form.Label>
        <Form.Text className="text-muted">
        *response 
        </Form.Text>
        <Form.Control size="sm" as="textarea" rows={8} 
        onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>

     
      {/* <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Response Documents</Form.Label>
        <Form.Text className="text-muted">
        *documents related response
        </Form.Text>
        <Form.Control type="file" multiple size="sm" style={{ padding: '0.05rem 0.3rem 0.2rem 0.3rem' }}/>
      </Form.Group> */}


    
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
  export default ResponseBulkForm;