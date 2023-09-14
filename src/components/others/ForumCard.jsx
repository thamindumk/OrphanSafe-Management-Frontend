import React from "react";
import "../../assets/css/staff/forum.css";
import { Button, Col, Form, Row } from "react-bootstrap";

const ForumCard = () => {
  return (
    <div className="background">
      <h1 className="name-headers">Public Forum</h1>
      <div className="container-card">
        <Row>
          <Col>
            <div className="card-head-text">User ID: 23FI5555DFSFDDFF</div>
            <div className="card-head-text">User Name: S.M.Balasooriya</div>
          </Col>
          <Col className="align-center">
            <div className="card-right-text">Total messages : 234</div>
          </Col>
        </Row>
        <div className="divider"></div>
        <Row>
          <Col lg={5}>
            <div className="Topic">Topic : CASE INVITATION 1726</div>
          </Col>
          <Col lg={7}>
            <div className="state-closed">closed</div>
          </Col>
        </Row>
        <Row>
          <div className="message">
            <div className="send">
              <div className="msg-text">
                Mr. Nanayakkara, Can you please refer the case that we have
                assigned to you. Thanks in advance.
              </div>
            </div>
            <div className="date">12:34 PM 23 Jan</div>
          </div>
        </Row>
        <Row>
          <div className="message">
            <div className="reply">
              <div className="msg-text">
                Case Reference: 234, It will be approved within next week
              </div>
            </div>
            <div className="date">12:34 PM 23 Jan</div>
          </div>
        </Row>
        <Row>
          <div className="message">
            <div className="reply">
              <div className="msg-text">
                It has been approved, please check.
              </div>
            </div>
            <div className="date">12:34 PM 23 Jan</div>
          </div>
        </Row>
        <div className="divider"></div>
        <Row>
          <Col lg={5}>
            <div className="Topic">Topic : CASE INVITATION 1726</div>
          </Col>
          <Col lg={7}>
            <div className="state-pending">pending</div>
          </Col>
        </Row>
        <Row>
          <div className="message">
            <div className="send">
              <div className="msg-text">
                Mr. Nanayakkara, Can you please refer the case that we have
                assigned to you. Thanks in advance.
              </div>
            </div>
            <div className="date">12:34 PM 23 Jan</div>
          </div>
        </Row>
        <div className="divider"></div>
        <div className="start-chat">
          <Form.Label>Start a Topic</Form.Label>
          <Row>
            <Col lg={10}>
              <Form.Control type="text" placeholder="Discribe your topic" />
            </Col>
            <Col lg={2}>
              <button className="my-btn mr-2">send</button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
