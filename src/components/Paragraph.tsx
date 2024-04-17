import React from "react";

type IProps = {
  field: string;
  value: string;
};

const Paragraph: React.FC<IProps> = ({ field, value }) => {
  return (
    <p className="text-lg">
      {field}: <span className="font-semibold">{value}</span>
    </p>
  );
};

export default Paragraph;
