import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";
import {
  useGetChildProfileNameListQuery,
  useGetSocialWorkerNameListQuery,
} from "../../slices/profileSlice";

const AssignSocialWorkers = () => {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();
  const { childData, isErrorChild, isSuccessChild, isLoadingChild } =
    useGetChildProfileNameListQuery();
  const {
    socialWorkerData,
    isErrorSocialWorker,
    isSuccessSocialWorker,
    isLoadingSocialWorker,
  } = useGetSocialWorkerNameListQuery();
  console.log(childData);
  // Array of all options
  // const optionList = [
  //   { value: "child1", label: "child1" },
  //   { value: "child2", label: "child2" },
  //   { value: "child3", label: "child3" },
  //   { value: "child4", label: "child4" },
  //   { value: "child5", label: "child5" },
  // ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <Row>
      <Col sm={7}>
        <MyCard>
          <MyCardHeader>Assign social workers form</MyCardHeader>
          <MyCardBody>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicCaseName">
                <Form.Label>Case name</Form.Label>
                <Form.Text className="text-muted">*name of the case</Form.Text>
                <Form.Control type="text" placeholder="e.g. Adoption case" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="caseDescription">
                <Form.Label>Case description</Form.Label>
                <Form.Text className="text-muted">
                  *brief description about the case
                </Form.Text>
                <Form.Control size="sm" as="textarea" rows={8} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Child Name</Form.Label>
                <Form.Text className="text-muted">*Select the child</Form.Text>

                <div className="dropdown-container">
                  <Select
                    options={childData}
                    placeholder="Select child"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Social worker Name</Form.Label>
                <Form.Text className="text-muted">
                  *Select the social workers assigned to this case
                </Form.Text>

                <div className="dropdown-container">
                  <Select
                    options={socialWorkerData}
                    placeholder="Select the Social Worker"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                  />
                </div>
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
export default AssignSocialWorkers;
