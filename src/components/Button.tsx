import React, { ButtonHTMLAttributes } from "react";

type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnColor?: string;
  label: string;
  loading?: boolean;
};

const Button: React.FC<IProps> = ({ label, btnColor, loading, ...props }) => {
  return (
    <button
      className={`p-[6px] text-white rounded-md hover:opacity-75 outline-none ${
        btnColor ? btnColor : "bg-[dodgerblue]"
      }`}
      {...props}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

export default Button;
