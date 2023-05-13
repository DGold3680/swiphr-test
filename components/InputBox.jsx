"use client";
import { useState } from "react";

function InputBox({ label="Input-Title",placeholder="placeholder text", topClass="" }) {
  const [value, setValue] = useState("");
  return (
    <div className={`flex flex-col mb-3 ${topClass}`}>
      <label htmlFor={label} className="font-semibold text-lg ">{label}</label>
      <input type="text" id={label} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)} className="border rounded-md h-12 border-gray_B hover:outline-green_A" />
    </div>
  );
}

export default InputBox;
