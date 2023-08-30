import React from "react";

const MyCard = ({ children }) => {
  return <div className="my-card">{children}</div>;
};

const MyCardHeader = ({ children }) => {
  return <div className="my-card-header">{children}</div>;
};

const MyCardBody = ({ children }) => {
  return <div className="my-card-body">{children}</div>;
};

export { MyCard, MyCardHeader, MyCardBody };
