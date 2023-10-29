import React from "react";

interface Props {
  label: string;
  icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({ label, icon }) => {
  return (
    <button className="p-4 flex gap-4 items-center rounded-full bg-[#1D2755] text-white">
      {icon}
      {label}
    </button>
  );
};

export default Button;
