import React from "react";
import ChildProfileIntro from "../../components/child/ChildProfileIntro";
import ChildProfileContent from "../../components/child/ChildProfileContent";

const childOverviewScreen = () => {
  return (
    <div>
      <ChildProfileIntro />
      <ChildProfileContent />
    </div>
  );
};

export default childOverviewScreen;
