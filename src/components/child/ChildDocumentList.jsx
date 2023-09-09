import React, { useState } from "react";
import ChildDocumentListCard from "./ChildDocumentListCard";
import Select from "react-select";

const ChildDocumentList = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const optionList = [
    { value: "20012", label: "K.D.Lalith" },
    { value: "19013", label: "R.S.Kumara" },
    { value: "18014", label: "P.H.Jayasiri" },
    { value: "20015", label: "Saman" },
    { value: "20016", label: "Kavindu" },
  ];

  function handleSelect(data) {
    setSelectedOption(data);
  }
  return (
    <div>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select the child"
          value={selectedOption}
          onChange={handleSelect}
        />
      </div>

      {selectedOption ? (
        <div className="document-header">Child ID : {selectedOption.value}</div>
      ) : (
        <div></div>
      )}
      {selectedOption ? (
        <ChildDocumentListCard />
      ) : (
        <div className="document-header">
          You didn't select a child. Please select one
        </div>
      )}
    </div>
  );
};

export default ChildDocumentList;
