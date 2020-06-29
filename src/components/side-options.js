import React from "react";

const SideOptions = ({ handleSelect }) => {
  return (
    <div>
      <select onChange={handleSelect}>
        <option value="">All</option>
        <option value="58ef22f47f25450340d98691">Biochemistry</option>
        <option value="58ef22f47f25450340d98692">Anatomy</option>
        <option value="58ef22f47f25450340d98693">Pathology</option>
      </select>
    </div>
  );
};

export default SideOptions;
