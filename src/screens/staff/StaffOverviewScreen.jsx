import React from "react";
//import ProfileIntro from "../../components/ProfileIntro";
import StaffIntro from "../../components/staff/staffIntro";
import StaffProfileContent from "../../components/staff/StaffProfileContent";
import { useLocation } from "react-router-dom";

const StaffOverviewScreen = () => {
  // const location = useLocation();

  // // Access the query parameters from the location object
  // const queryParams = new URLSearchParams(location.search);
  // const paramValue = queryParams.get("id");
  // console.log(paramValue);

  // Get the value of a specific query parameter by its name
  return (
    <div>
      {/* <StaffIntro /> */}
      <StaffProfileContent />
    </div>
  );
};

export default StaffOverviewScreen;
