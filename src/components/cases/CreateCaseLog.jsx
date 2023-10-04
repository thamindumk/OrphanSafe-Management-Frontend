import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";
import {
  useGetCaseListByUserIdQuery,
  useCreateCaseLogMutation,
} from "../../slices/caseApiSlice";
import { toast } from "react-toastify";

const CreateCaseLogs = () => {
  const [createCaseLog, { err, loading, success }] = useCreateCaseLogMutation();
  // React state to manage selected options
  const [selectedOption, setSelectedOption] = useState();
  const [logName, setLogName] = useState();
  const [logDescription, setLogDescription] = useState();
  const { data, isError, isLoading, isSuccess } = useGetCaseListByUserIdQuery();
  // Array of all options

  function handleSelect(data) {
    setSelectedOption(data);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const caseLogData = {
        caseId: selectedOption.value,
        name: logName,
        description: logDescription,
      };
      const res = await createCaseLog(caseLogData).unwrap();
      toast.success("creation completed");
    } catch (error) {
      toast.error(error.message);
    }
  };
  if (isSuccess) {
    console.log(data);
    const optionList = data.caseList.map(function (caseInfo) {
      const list = { value: caseInfo.CaseId, label: caseInfo.CaseName };
      return list;
    });

    // Function triggered on selection
    return (
      <Row>
        <Col sm={7}>
          <MyCard>
            <MyCardHeader>Create Case Log Form</MyCardHeader>
            <MyCardBody>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Case Name</Form.Label>
                  <Form.Text className="text-muted">
                    *Select the Case Name
                  </Form.Text>
                  <div className="dropdown-container">
                    <Select
                      options={optionList}
                      placeholder="Select child"
                      value={selectedOption}
                      onChange={handleSelect}
                      isSearchable={true}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCaseName">
                  <Form.Label>Case log name</Form.Label>
                  <Form.Text className="text-muted">
                    *name of the case log
                  </Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="eg. 1st meeting "
                    onChange={(e) => setLogName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="caseDescription">
                  <Form.Label>Case log description</Form.Label>
                  <Form.Text className="text-muted">
                    *brief description about the case
                  </Form.Text>
                  <Form.Control
                    size="sm"
                    as="textarea"
                    rows={8}
                    placeholder="eg. can we get a first meeting to talk about this case briefly"
                    onChange={(e) => setLogDescription(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Case log Documents</Form.Label>
                  <Form.Text className="text-muted">
                    *documents related to the Case log
                  </Form.Text>
                  <Form.Control
                    type="file"
                    multiple
                    size="sm"
                    style={{ padding: "0.05rem 0.3rem 0.2rem 0.3rem" }}
                  />
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
  }
};
export default CreateCaseLogs;
