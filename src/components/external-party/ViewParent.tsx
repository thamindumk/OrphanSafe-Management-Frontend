import "../../index.css"
import "../../assets/css/staff/dataTable.css"
import { Button, Col, Form, Row } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript

const ViewParent = () => {
    const tableRef = useRef(null);

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, []);
    return (
        <Row>
        <Col sm={12}>
        <MyCard>
        <MyCardHeader>Parent details</MyCardHeader>
        <MyCardBody>
        
            <div>
            <table
                  ref={tableRef}
                  id="example"
                  className="row-border"
                  style={{width: "100%"}}
                >
                  <thead>
                    <tr>
                      <th >Parent ID</th>
                      <th>Name</th>
                      <th>MobileNumber</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>ID Number</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><a href="#">bob Niles</a></td>
                      <td>07134567678</td>
                      <td>bob@gmail.com</td>
                      <td>Panadura,Kaluthara</td>
                      <td>20000034567</td>
                      <td>
                        <i className="fas fa-edit mr-3 text-primary"></i><i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><a href="#">bob Niles</a></td>
                      <td>07134567678</td>
                      <td>bob@gmail.com</td>
                      <td>Panadura,Kaluthara</td>
                      <td>20000034567</td>
                      <td>
                        <i className="fas fa-edit mr-3 text-primary"></i><i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><a href="#">bob Niles</a></td>
                      <td>07134567678</td>
                      <td>bob@gmail.com</td>
                      <td>Panadura,Kaluthara</td>
                      <td>20000034567</td>
                      <td>
                        <i className="fas fa-edit mr-3 text-primary"></i><i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><a href="#">bob Niles</a></td>
                      <td>07134567678</td>
                      <td>bob@gmail.com</td>
                      <td>Panadura,Kaluthara</td>
                      <td>20000034567</td>
                      <td>
                        <i className="fas fa-edit mr-3 text-primary"></i><i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                  </tbody>
            </table>
            </div>
    </MyCardBody>
    </MyCard>
        </Col>
      </Row> 
       
    );
  };
  export default ViewParent;