import { Box, LinearProgress } from "@mui/material";
import { useState } from "react";

interface ValueProps {
  value: number;
  type: string;
}

interface LinearProps {
  value: number;
}
const CustomLinearProgress1 = ({ value }: LinearProps) => {
  let color: string = "ff0000";

  if (value < 10) {
    color = "ff0000";
  } else if (value < 30) {
    color = "a79300";
  } else if (value < 70) {
    color = "#09ae09";
  } else if (value < 90) {
    color = "#1260eb";
  } else if (value < 100) {
    color = "#df18e3";
  } else {
    color = "ea6811";
  }

  return (
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        display: "flex",
        marginLeft: "5%",
        width: "70%",
        background: "none",
        "& .MuiLinearProgress-bar": {
          backgroundColor: color,
        },
      }}
    />
  );
};

const CustomLinearProgress2 = ({ value }: LinearProps) => {
  let color: string = "ff0000";

  if (value < 10) {
    color = "ff0000";
  } else if (value < 30) {
    color = "a79300";
  } else if (value < 70) {
    color = "#09ae09";
  } else if (value < 90) {
    color = "#1260eb";
  } else if (value < 100) {
    color = "#df18e3";
  } else {
    color = "ea6811";
  }

  return (
    <LinearProgress
      variant="determinate"
      value={value}
      dir="rtl"
      sx={{
        display: "flex",
        marginLeft: "5%",
        width: "70%",
        background: "none",
        // 프로그레스 진행방향이 오른쪽에서 왼쪽으로 진행되게하기
        transform: 'rotate(180deg)',
        "& .MuiLinearProgress-bar": {   
          backgroundColor: color,
          transform: 'rotate(180deg)'
          
        },
      }}
    />
  );
};
const CustomLinearProgress = ({ value, type }: ValueProps) => {
  if (type === "투구" || "상의" || "하의" || "장갑" || "어께" || "무기") {
    return <CustomLinearProgress1 value={value} />;
  } else {
    return <CustomLinearProgress2 value={value} />;
  }
};

export default CustomLinearProgress;
