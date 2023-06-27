import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import QualityBox from "./qualitybox";
import { ArmoryEquipment } from "@/app/character/[charaName]/api.interface";
import React from "react";
import EquipImage from "./equipimage";

interface EquipListProps {
  equipment?: ArmoryEquipment;
  tooltipData?: any;
}

const EquipList = ({ equipment, tooltipData }: EquipListProps) => {
  const data = equipment;
  const flatData = data ? Object.values(data).flat() : [];
  
  console.log("flatData", flatData);

  console.log("tooltip", tooltipData);

  return (
    <Paper>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {/* flatData 의 0~5번째까지 장비 왼쪽탭 */}
        {flatData.slice(0, 6).map((item, index) => (
          <ListItem key={index}>
            <EquipImage icon={item.Icon} grade={item.Grad} value={tooltipData[index].Element_001.value.qualityValue}/>
            {/* primary = 장비이름 , secondary = 장비종류(ex 투구,견갑) */}
            <ListItemText
              primary={item.Name}
              secondary={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>{item.Type}</div>
                  <div>
                    {tooltipData[index].Element_008.value.Element_001.slice(
                      0,
                      3
                    )}
                  </div>
                </div>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default EquipList;
