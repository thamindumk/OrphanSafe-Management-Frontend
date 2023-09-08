import React, { useState } from "react";
import SocialWorkerDocumentListCard from "../../components/external-party/SocialWorkerDocumentListCard";
import Select from "react-select";

const SocialWorkerDocumentList = () => {
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
          placeholder="Select the Social Worker"
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
        <SocialWorkerDocumentListCard />
      ) : (
        <div className="document-header">
          You didn't select a social worker. Please select one
        </div>
      )}
    </div>
  );
};

export default SocialWorkerDocumentList;
