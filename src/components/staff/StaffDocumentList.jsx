import React, { useState } from "react";
import StaffDocumentListCard from "./StaffDocumentListCard";
import Select from "react-select";
import "../../assets/css/dropdown.css";

const StaffDocumentList = () => {
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
          placeholder="Select Employee"
          value={selectedOption}
          onChange={handleSelect}
        />
      </div>

      {selectedOption ? (
        <div className="document-header">staff ID : {selectedOption.value}</div>
      ) : (
        <div className="document-header"></div>
      )}
      {selectedOption ? (
        <StaffDocumentListCard />
      ) : (
        <div className="document-header">
          You didn't select a staff memeber. Please select one
        </div>
      )}
    </div>
  );
};

export default StaffDocumentList;
