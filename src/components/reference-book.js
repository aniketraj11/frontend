import React from "react";

const ReferenceBook = ({ item_reference }) => {
  return (
    <div className="book">
      <img
        src={item_reference.thumbnail}
        className="book-thumbnail"
        alt="Book Title"
      />
      <span className="book-reference">{item_reference.title}</span>
    </div>
  );
};

export default ReferenceBook;
