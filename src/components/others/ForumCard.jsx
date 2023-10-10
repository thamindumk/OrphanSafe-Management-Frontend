import React, { useEffect } from "react";
import "../../assets/css/staff/forum.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useGetChatQuery } from "../../slices/adminApiSlice";
import { useSelector } from "react-redux";

const ForumCard = () => {
  const { data, isLoading, isError, isSuccess } = useGetChatQuery();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      // Get a reference to your div element
      const myDiv = document.getElementById("scrollview");

      // Scroll to the bottom
      myDiv.scrollTop = myDiv.scrollHeight;
    }
  }, [data]);

  return (
    <div className="background">
      <h1 className="name-headers">Public Forum</h1>
      <div className="container-card">
        <Row>
          <Col>
            <div className="card-head-text">User ID: {userInfo.userId}</div>
            <div className="card-head-text">User Name: {userInfo.email}</div>
          </Col>
        </Row>
        <div className="divider"></div>
        {isError && (
          <Col className="text-center">
            <strong>Unexpected Error occured Sorry! :(</strong>
          </Col>
        )}
        {isLoading && <Col className="text-center">Loading Data!</Col>}
        {isSuccess && (
          <div
            id="scrollview"
            style={{
              maxHeight: "500px",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            {data.map((chat) => (
              <Row key={chat.Id}>
                <Col className="">
                <div className="message">
                  <div
                    className={chat.From === userInfo.userId ? "send" : "reply mr-4"}
                  >
                    <div className="msg-text">{chat.Content}</div>
                  </div>
                    <div className="date">
                      {chat.Timestamp.toString().replace("T", " ")}
                    </div>
                </div>
                </Col>
              </Row>
            ))}
          </div>
        )}

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
