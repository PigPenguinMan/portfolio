import { ArmoryEquipment } from "@/app/character/[charaName]/api.interface";
import {
  Avatar,
  Box,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import CustomLinearProgress from "../customlinearprogress";
import QualityBox from "./qualitybox";

interface EqumientProps {
  equipment?: ArmoryEquipment;
}

const Equipment = ({ equipment }: EqumientProps) => {
  const data = equipment;
  const flatData = data ? Object.values(data).flat() : [];
  console.log("data", flatData);
  // Tooltip에서 필요한 데이터가 있어 Json형식으로 바꿔 사용 
  const TooltipData = flatData.map((item) => JSON.parse(item.Tooltip));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:'column',
        justifyContent: "space-between",
        width: "100%",
        height: "70%",
      }}
    >
      {/* 장비 */}
      <Paper >
        <List sx={{ display: "flex", flexDirection: 'column' }}>
          {/* flatData 의 0~5번째까지 장비 왼쪽탭 */}
          {/* List내부 컴포넌트화 시키기 */}
          {flatData.slice(0, 6).map((item, index) => (
            <>
              <ListItem key={index}>
                <ListItemAvatar
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Avatar
                    variant="rounded"
                    src={item.Icon}
                  >
                    </Avatar>
                    <QualityBox value={TooltipData[index].Element_001.value.qualityValue}/>
                </ListItemAvatar>
                {/* primary = 장비이름 , secondary = 장비종류(ex 투구,견갑) */}
                <ListItemText primary={item.Name} secondary={item.Type} />
              </ListItem>
           
            </>
          ))}
        </List>
      </Paper>

      {/* 오른쪽 액세서리 */}
      <Paper >
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {flatData.slice(6, 13).map((item, index) => (
            <>
              <ListItem key={index}>
                <ListItemAvatar sx={{display:'flex',flexDirection:'column'}}>
                  <Avatar variant="rounded" src={item.Icon} >
                  </Avatar>
                  <QualityBox value={TooltipData[index].Element_001.value.qualityValue}/>
                </ListItemAvatar>
                <ListItemText primary={item.Name} secondary={item.Type} />
              </ListItem>
              {/* <CustomLinearProgress
                value={TooltipData[index].Element_001.value.qualityValue}
                type={flatData[index].Type}
              /> */}
            </>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Equipment;
