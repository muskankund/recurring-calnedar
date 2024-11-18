"use client";
import React from "react";

const DatePicker = ({ label, value, onChange, className = "" ,...rest}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block font-bold mb-2 text-black">{label}</label>}
      <input
        type="date"
        value={value || ""}
        onChange={onChange}
        className="p-2 rounded bg-gray-500 border-none outline-none w-full"
        {...rest}
      />
    </div>
  );
};

export default DatePicker;
