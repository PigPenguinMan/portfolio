import { ArmoryEquipment } from "@/app/character/[charaName]/api.interface";
import {
  Avatar,
  Box,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import CustomLinearProgress from "../customlinearprogress";

interface EqumientProps {
  equipment?: ArmoryEquipment;
}

const Equipment = ({ equipment }: EqumientProps) => {
  const data = equipment;
  const flatData = data ? Object.values(data).flat() : [];
  console.log("data", flatData);
  const TooltipData = flatData.map((item) => JSON.parse(item.Tooltip));

  console.log('tooltip',TooltipData[1]);
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "70%",
      }}
    >
      {/* 왼쪽 장비 */}
      <Box sx={{ width: "33%" }}>
        <List >
          {/* flatData 의 0~5번째까지 장비 왼쪽탭 */}
          {flatData.slice(0, 6).map((item, index) => (
            <>
              <ListItem
                key={index}
              >
                <ListItemAvatar>
                  <Avatar variant="square" src={item.Icon} />
                </ListItemAvatar>
                {/* primary = 장비이름 , secondary = 장비종류(ex 투구,견갑) */}
                <ListItemText primary={item.Name} secondary={item.Type} />
              </ListItem>
              <CustomLinearProgress
                value={TooltipData[index].Element_001.value.qualityValue}
                type={flatData[index].Type}
              />
            </>
          ))}
        </List>
      </Box>
      {/* 중간 캐릭터이미지 */}
      <Box sx={{ width: "33%" }}></Box>
      {/* 오른쪽 액세서리 */}
      <Box sx={{ width: "30%" }}>
        <List>

          {flatData.slice(6, 13).map((item, index) => (
            <>
            <ListItem key={index}>
              <ListItemText primary={item.Name} secondary={item.Type} />
              <ListItemAvatar>
                <Avatar variant="square" src={item.Icon} />
              </ListItemAvatar>
            </ListItem>
            <CustomLinearProgress
                value={TooltipData[index].Element_001.value.qualityValue}
                type={flatData[index].Type}
              />
          </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Equipment;
