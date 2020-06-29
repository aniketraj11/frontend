import React from "react";

const DescriptionBody = ({ description }) => {
  return (
    <div className="description-body">
      {description.map((data) => {
        return (
          <div
            key={data._id}
            dangerouslySetInnerHTML={{ __html: data.body_html }}
          />
        );
      })}
    </div>
  );
};

export default DescriptionBody;
