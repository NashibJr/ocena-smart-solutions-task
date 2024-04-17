import React, { InputHTMLAttributes, SelectHTMLAttributes } from "react";

type IProps = InputHTMLAttributes<HTMLInputElement> &
  SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    isSelect?: boolean;
  };

const Input: React.FC<IProps> = ({ label, isSelect = false, ...props }) => {
  return (
    <label>
      <span className="font-semibold opacity-75">{label} </span>
      {!isSelect ? (
        <input
          className="p-[6px] w-full outline-none border border-[#d3d3d3] rounded-md"
          {...props}
        />
      ) : (
        <select
          className="p-[6px] w-full outline-none border border-[#d3d3d3] rounded-md"
          {...props}
        >
          <option value="mtech">M.tech</option>
          <option value="btech">B.tech</option>
        </select>
      )}
    </label>
  );
};

export default Input;
