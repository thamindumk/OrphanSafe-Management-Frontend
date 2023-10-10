import "../../index.css";
import "../../assets/css/staff/dataTable.css";
import { Button, Col, Form, Row,Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript
import { useGetChildProfileListQuery } from "../../slices/profileApiSlice";
import { Link } from "react-router-dom";


const ViewChild = () => {
  const tableRef = useRef(null);

  // const [deleteChildProfile] = useDeleteChildProfileMutation();

  // const handleDelete = async (childId) => {
  //   const resp = await deleteChildProfile({ id: childId });
  //   if (isError) toast.error(resp.data.message);
  //   if (isSuccess) refetch();
  // };
  

  const { data, isError, isSuccess, isLoading,refetch } = useGetChildProfileListQuery();

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, [data]);
  return (
    <Row>
      <Col sm={12}>
        <MyCard>
          <MyCardHeader>Child Details</MyCardHeader>
          <MyCardBody>
            {isError && <Col className="text-center"><strong>Unexpected Error occurred Sorry! :(</strong></Col>}
            {isLoading && <Col className="text-center">Loading Data!</Col>}
            {isSuccess && 
            <div>
              <Table
                responsive
                ref={tableRef}
                id="example"
                className="row-border"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Date Of Birth</th>
                    <th>Gender</th>
                    <th>Date of Admission</th>
                    <th>Assigned Orphanage</th>
                    <th>Actions</th>
                  </tr>
                  
                </thead>
                <tbody>
                {data.childProfiles.map((child) => (
                    <tr>
                      <td>
                        <Link  to={`/profile/viewProfile/overview?childId=${child.ChildId}`}>
                          <a href="#">{child.FullName}</a>
                        </Link>
                      </td>
                      <td>{child.DOB}</td>
                      <td>{child.Gender}</td>
                      <td>{child.DateOfAdmission}</td>
                      <td>{child.OrphanageName}</td>
                      <td>
                      <Link className="blue-button" to={`/edit/editChildProfile?childId=${child.ChildId}`}>
                          Edit
                        </Link>
                        <Link class="red-button"to={`/delete/deleteChildProfile?childId=${child.ChildId}`}>
                          Delete
                        </Link>
                      {/* <i className="fas fa-edit mr-3 text-primary"></i> */}
                      {/* <i className="fas fa-trash text-danger"></i> */}
                    </td>
                    </tr>
                  ))}


                {/* <tr>
                    <td>3</td>
                    <td>
                      <LinkContainer to="/profile/viewProfile/overview">
                        <a href="#">Piyal Gamage</a>
                      </LinkContainer>
                    </td>
                    <td>Male</td>
                    <td>2012/10/11</td>
                    <td>Little Dreams</td>
                    <td>Nupun pilapitiya</td>
                    <td>
                      <i className="fas fa-edit mr-3 text-primary"></i>
                      <i className="fas fa-trash text-danger"></i>
                    </td>
                  </tr> */}
                 
                </tbody>
              </Table>
            </div>
            }
          </MyCardBody>
        </MyCard>
      </Col>
    </Row>
  );
};
export default ViewChild;
