import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";
import { getReportFromData } from "../../lib/reports";
import { useReportMutation } from "../../slices/adminApiSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const FinancialReport = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loadData] = useReportMutation();
  const handleClick = async (name) => {
    const resp = await loadData(`${name}&start=${startDate.toLocaleDateString()}&end=${endDate.toLocaleDateString()}`);
    if (resp.data) getReportFromData(resp.data);
  };
  return (
    <div className="responsive">
      <Row style={{ marginBottom: "10px" }}>
        <Col sm={6}>
          <MyCard>
            <MyCardHeader>Financial Reports </MyCardHeader>
            <MyCardBody>
              <div className="d-flex flex-wrap">
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "15px", fontWeight: "900" }}>
                        Cash Flow Report
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        This report tracks the inflow and outflow of cash and
                        cash equivalents during a given period.
                      </div>
                      <Row>
                        <Col sm={6}>
                          <div>start date</div>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd/MM/yyyy" // You can customize the date format
                          />
                        </Col>
                        <Col sm={6}>
                          <div>end date</div>
                          <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            dateFormat="dd/MM/yyyy" // You can customize the date format
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button
                      className="my-btn-primary"
                      onClick={async () =>
                        await handleClick("ORPHANAGE_CASHFLOW_REPORT")
                      }
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </MyCardBody>
          </MyCard>
        </Col>
      </Row>
    </div>
  );
};
export default FinancialReport;
