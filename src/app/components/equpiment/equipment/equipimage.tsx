import { Avatar, ListItemAvatar } from "@mui/material";
import QualityBox from "./qualitybox";

interface IconProps {
  icon?: string;
  grade?: string;
  value?: number;
}
const EquipImage = ({ icon, grade, value }: IconProps) => {
  let bgColor = "#ff0000";
  let bgColor2 = "#00ff00";
  if (grade === "고대") {
    bgColor = "#3d3325";
    bgColor2 = "#dcc999";
  } else if (grade === "유물") {
    bgColor = "#341a09";
    bgColor2 = "#a24006";
  } else if (grade === "전설") {
    bgColor = "#362003";
    bgColor2 = "#9e5f04";
  } else if (grade === "영웅") {
    bgColor = "#261331";
    bgColor2 = "#480d5d";
  } else if (grade === "희귀") {
    bgColor = "#111f2c";
    bgColor2 = "#113d5d";
  } else if (grade === "고급") {
    bgColor = "18220b";
    bgColor2 = "#304911";
  } else {
    bgColor = "#ff0000";
    bgColor2 = "#00ff00";
  }

  return (
    <ListItemAvatar
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `linear-gradient(to bottom right, ${bgColor} ,${bgColor2})`,
        borderRadius: "8px",
        justifyContent: "flex-end",
        height: "85%",
      }}
    >
      <Avatar src={icon} />
      <QualityBox value={value} />
    </ListItemAvatar>
  );
};

export default EquipImage;
