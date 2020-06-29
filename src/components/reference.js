import React from "react";
import ReferenceBook from "./reference-book";

const Reference = ({ reference }) => {
  return (
    <div className="reference">
      <div className="reference-title">Reference</div>
      {reference.map((item) => {
        return <ReferenceBook key={item._id} item_reference={item} />;
      })}
    </div>
  );
};

export default Reference;
