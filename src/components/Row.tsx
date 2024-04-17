import React from "react";

export interface RowProps {
  year: number;
  timeFee: number | string;
  tuitionFee: number;
}

const Row: React.FC<RowProps> = ({ timeFee, tuitionFee, year }) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{timeFee}</td>
      <td>{tuitionFee}</td>
    </tr>
  );
};

export default Row;
