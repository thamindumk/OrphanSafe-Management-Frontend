import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { MyCard, MyCardBody, MyCardHeader } from "../MyCard";
import "../../index.css";
import "../../assets/css/dashbord/dashboard.css";
import { getReportFromData } from "../../lib/reports";
import { useReportMutation } from "../../slices/adminApiSlice";

const ChildReport = () => {
  const [loadData] = useReportMutation();
  const handleClick = async (name) => {
    const resp = await loadData(name);
    if (resp.data) getReportFromData(resp.data);
  };
  return (
    <div className="responsive">
      <Row style={{ marginBottom: "10px" }}>
        <Col sm={6}>
          <MyCard>
            <MyCardHeader>Child Reports </MyCardHeader>
            <MyCardBody>
              <div className="d-flex flex-wrap">
                <div className="role-container">
                  <div className="role-container-left d-flex flex-column justify-content-between mr-3">
                    <div>
                      <div style={{ fontsize: "15px", fontWeight: "900" }}>
                        Child Account Report
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#232F3E",
                        }}
                      >
                        This report contains detailed information about each
                        child, including their name, date of birth, gender,
                        medical history, and any special needs or requirements.
                      </div>
                    </div>
                  </div>
                  <div className="role-container-right d-flex justify-content-end align-items-center">
                    <button
                      className="my-btn-primary"
                      onClick={async () =>
                        await handleClick("CHILD_PROFILES_FOR_ORPHANAGE")
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
export default ChildReport;
