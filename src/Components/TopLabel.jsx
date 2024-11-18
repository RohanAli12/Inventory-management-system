import React from "react";
import Button from "../Components/Button";
import DetailedBtn from "../Components/DetailedBtn";
import {Link } from "react-router-dom";

const TopLabel = ({label, isBtnHide = false, color = "#000", background = "#fff"}) => {
  return (
    <div style={{background}} className="py-3 px-4 w-full flex items-center justify-between">
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
    </div>
  );
};

export default TopLabel;
