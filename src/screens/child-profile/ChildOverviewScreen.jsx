import React from "react";
import ProfileIntro from "../../components/ProfileIntro";
import ChildInto from "../../components/child/ChildInto"
import ChildProfileContent from "../../components/child/ChildProfileContent";

const ChildOverviewScreen = () => {
  return (
    <div>
      <ChildInto />
      <ChildProfileContent />
    </div>
  );
};

export default ChildOverviewScreen;
