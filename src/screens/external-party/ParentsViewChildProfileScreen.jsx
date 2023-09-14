import React from "react";
import ProfileIntro from "../../components/ProfileIntro";
import ParentViewChildProfile from "../../components/external-party/ParentViewChildProfile";

const ParentViewChildProfileScreen = () => {
  return (
    <div>
      <ProfileIntro />
      <ParentViewChildProfile />
    </div>
  );
};

export default ParentViewChildProfileScreen;