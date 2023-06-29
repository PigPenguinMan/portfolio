import {
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { ArmoryEquipment } from "@/app/character/[charaName]/api.interface";
import AccImage from "./accimage";

interface AccProps {
  equipment?: ArmoryEquipment;
  tooltipData?: any;
}
const AccList = ({ equipment, tooltipData }: AccProps) => {
  const data = equipment;
  const flatData = data ? Object.values(data).flat() : [];

  

//  팔찌 , 별 품질박스 색깔 수정 필요

  return (
    <Paper variant="outlined">
      <h4>장신구</h4>
      <List sx={{ display: "flex" }}>
        {flatData.slice(6, 13).map((item, index) => (
          <ListItem key={index}>
            <AccImage
              type={item.Type}
              icon={item.Icon}
              grade={item.Grade}
              value={tooltipData[index+6].Element_001.value.qualityValue}
              stoneValue={tooltipData[11].Element_006.value.Element_000.contentStr}

            />
            <ListItemText
              secondary={item.Type === "어빌리티 스톤" ? "돌" : item.Type}
              sx={{ textAlign: "center" }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AccList;
