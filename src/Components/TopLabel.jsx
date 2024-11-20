import React from "react";
import Button from "../Components/Button";
import DetailedBtn from "../Components/DetailedBtn";
import {Link } from "react-router-dom";

const TopLabel = ({label, isBtnHide = false, color = "#000", background = "#fff", paddingBlock= "14px", borderBottom="none", optionInput}) => {
  return (
    <div style={{background, paddingBlock, borderBottom}} className="py-3 px-4 w-full flex items-center justify-between">
      <span style={{color}} className="text-xl font-medium">{label}</span>
    { isBtnHide &&
      <div className="flex gap-3 items-center justify-center">
        <Button
          btnContent={"Filter"}
          color={"#118CF0"}
          backgroundColor={"#ffffff"}
          border={"1px solid #118CF0"}
        />
        <Link to="/add">
        <Button
          btnContent={"New"}
          color={"#ffffff"}
          backgroundColor={"#118CF0"}
        />
        </Link>
        <DetailedBtn border={"1px solid #118CF0"} color={"#118CF0"} />
      </div>}
      {optionInput && 
        <select className="cursor-pointer focus:outline-none border border-[#2B303466] text-[#2B303466] px-3 py-2 rounded-md shadow-sm">
          {optionInput.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        }
    </div>
  );
};

export default TopLabel;
