import React, { useState } from "react";
import ParentDocumentListCard from "../../components/external-party/parentDocumentListCard";
import Select from "react-select";

const ParentDocumentList = () => {
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
          placeholder="Select the Parent"
          value={selectedOption}
          onChange={handleSelect}
        />
      </div>

      {selectedOption ? (
        <div className="document-header">
          Social Worker ID : {selectedOption.value}
        </div>
      ) : (
        <div></div>
      )}
      {selectedOption ? (
        <ParentDocumentListCard />
      ) : (
        <div className="document-header">
          You didn't select a Parent. Please select one
        </div>
      )}
    </div>
  );
};

export default ParentDocumentList;
