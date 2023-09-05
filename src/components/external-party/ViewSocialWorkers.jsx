import "../../index.css"
import "../../assets/css/staff/dataTable.css"
import { Button, Col, Form, Row,Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import "datatables.net"; // Import DataTables JavaScript

const ViewSocialWorkers = () => {
    const tableRef = useRef(null);

  useEffect(() => {
    // Initialize DataTable
    $(tableRef.current).DataTable();
  }, []);
    return (
        <Row>
        <Col sm={12}>
        <MyCard>
        <MyCardHeader>Social worker Details</MyCardHeader>
        <MyCardBody>
        
            <div>
            <Table responsive
                  ref={tableRef}
                  id="example"
                  className="row-border"
                  style={{width: "100%"}}
                >
                  <thead>
                    <tr>
                      <th >Social worker ID</th>
                      <th>Name</th>
                      <th>Contact Number</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>ID Number</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                 
                    <tr>
                      <td>1</td>
                      <td><a href="#">Sunil Perera</a></td>
                      <td>07776691234</td>
                      <td>Moratuwa,Colombo</td>
                      <td>Sunil@gmail.com</td>
                      <td>1999000345</td>
                      <td>
                        <i className="fas fa-edit mr-3 text-primary"></i><i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><a href="#">Sunil Perera</a></td>
                      <td>07776691234</td>
                      <td>Moratuwa,Colombo</td>
                      <td>Sunil@gmail.com</td>
                      <td>1999000345</td>
                      <td>
                        <i className="fas fa-edit mr-3 text-primary"></i><i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><a href="#">Sunil Perera</a></td>
                      <td>07776691234</td>
                      <td>Moratuwa,Colombo</td>
                      <td>Sunil@gmail.com</td>
                      <td>1999000345</td>
                      <td>
                        <i className="fas fa-edit mr-3 text-primary"></i><i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><a href="#">Sunil Perera</a></td>
                      <td>07776691234</td>
                      <td>Moratuwa,Colombo</td>
                      <td>Sunil@gmail.com</td>
                      <td>1999000345</td>
                      <td>
                        <i className="fas fa-edit mr-3 text-primary"></i><i className="fas fa-trash text-danger"></i>
                      </td>
                    </tr>
                    
                  </tbody>
            </Table>
            </div>
    </MyCardBody>
    </MyCard>
        </Col>
      </Row> 
       
    );
  };
  export default ViewSocialWorkers;