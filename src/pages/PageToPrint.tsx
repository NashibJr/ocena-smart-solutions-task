import React from "react";
import Paragraph from "../components/Paragraph";
import Row, { RowProps } from "../components/Row";
import moment from "moment";

type IProps = {
  reference: string;
  username: string;
  rows: RowProps[];
  course: string;
};

const PageToPrint: React.FC<IProps> = ({
  course,
  reference,
  rows,
  username,
}) => {
  return (
    <div className="w-full p-5 sm:p-24 md:p-28 flex flex-col gap-2 sm:gap-4 opacity-95">
      <p className="text-lg">{reference}</p>
      <Paragraph field="Name" value={username} />
      <Paragraph field="Course" value={course} />
      <Paragraph
        field="Date of offer"
        value={`${moment().format("MM/DD/YYYY")}`}
      />
      <div className="w-full flex flex-col gap-2 sm:gap-4">
        <label>Fee structure:</label>
        <table className="table-content">
          <thead>
            <tr>
              <th>year</th>
              <th>One time fee</th>
              <th>Tuition fee</th>
            </tr>
          </thead>
          <tbody>
            {rows?.map((row, index) => (
              <Row
                key={index}
                timeFee={row.timeFee}
                tuitionFee={row.tuitionFee}
                year={row.year}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageToPrint;
