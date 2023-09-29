import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";
import {
  useGetChildProfileNameListQuery,
  useGetSocialWorkerNameListQuery,
} from "../../slices/profileApiSlice";

const AssignSocialWorkers = () => {
  // React state to manage selected options
  const [selectedChildOptions, setSelectedChildOptions] = useState();
  const [selectedSocialWorkerOptions, setSelectedSocialWorkerOptions] =
    useState();

  const cResponse = useGetChildProfileNameListQuery();
  const swResponse = useGetSocialWorkerNameListQuery();
  if (cResponse.isSuccess && swResponse.isSuccess) {
    console.log(cResponse.data.childProfileNameList);
    const childList = cResponse.data.childProfileNameList.map(function (child) {
      const list = { value: child.Id, lable: child.FullName };
      return list;
    });
    const socialWorkerList = cResponse.data.childProfileNameList.map(function (
      sw
    ) {
      const list = { value: sw.userId, lable: sw.Name };
      return list;
    });
    console.log(childList);
    console.log(socialWorkerList);

    function handleSelect() {
      setSelectedChildOptions();
      selectedSocialWorkerOptions();
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
                  <Form.Text className="text-muted">
                    *name of the case
                  </Form.Text>
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
                  <Form.Text className="text-muted">
                    *Select the child
                  </Form.Text>

                  <div className="dropdown-container">
                    <Select
                      options={cResponse.data}
                      placeholder="Select child"
                      value={selectedChildOptions}
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
                      options={swResponse.data}
                      placeholder="Select the Social Worker"
                      value={selectedSocialWorkerOptions}
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
  }
  // Function triggered on selection
};
export default AssignSocialWorkers;
