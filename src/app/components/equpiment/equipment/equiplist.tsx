import { List, ListItem, ListItemText, Paper } from "@mui/material";
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

  return (
    <Paper variant="outlined">
      <div>
        <h4>장비</h4>
      </div>
      <List sx={{ display: "flex" }}>
        {/* flatData 의 0~5번째까지 장비 왼쪽탭 */}
        {flatData.slice(0, 6).map((item, index) => (
          <ListItem key={index}>
            <EquipImage
              icon={item.Icon}
              grade={item.Grade}
              value={tooltipData[index].Element_001.value.qualityValue}
            />
            <ListItemText
              primary={<span>{item.Name.slice(0, 4)}</span>}
              secondary={
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span>{item.Type}</span>
                  <span>
                    {tooltipData[index].Element_008.value.Element_001.slice(
                      0,
                      3
                    )}
                  </span>
                </span>
              }
              sx={{ textAlign: "center" }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default EquipList;
