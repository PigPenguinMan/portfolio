import { ArmoryProfile } from "@/app/character/[charaName]/api.interface";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

interface CharInfoBoxProps {
  armoryProfile?: ArmoryProfile;
}

const CharInfoBox = ({ armoryProfile }: CharInfoBoxProps) => {
  const data = Array(armoryProfile);

  return (
    <Paper variant="outlined" sx={{display:'flex'}}>
      <List>
        {/* 박스컴포넌트 만들어 아이콘화시키기 */}
        <ListItem>
          <ListItemText primary="이름" />
        </ListItem>
        <ListItem>
          <ListItemText primary="레벨" />
        </ListItem>
        <ListItem>
          <ListItemText primary="서버" />
        </ListItem>
        <ListItem>
          <ListItemText primary="길드" />
        </ListItem>
        <ListItem>
          <ListItemText primary="아이템 레벨" />
        </ListItem>
        <ListItem>
          <ListItemText primary="칭호" />
        </ListItem>
        <ListItem>
          <ListItemText primary="탐험레벨" />
        </ListItem>
        <ListItem>
          <ListItemText primary="PVP" />
        </ListItem>
        <ListItem>
          <ListItemText primary="영지" />
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText primary={armoryProfile?.CharacterName} />
        </ListItem>
        <ListItem>
          <ListItemText primary={armoryProfile?.CharacterLevel} />
        </ListItem>
        <ListItem>
          <ListItemText primary={armoryProfile?.ServerName} />
        </ListItem>
        <ListItem>
          <ListItemText primary={armoryProfile?.GuildName} />
        </ListItem>
        <ListItem>
          <ListItemText primary={armoryProfile?.ItemAvgLevel} />
        </ListItem>
        <ListItem>
          <ListItemText primary={armoryProfile?.Title} />
        </ListItem>
        <ListItem>
          <ListItemText primary={armoryProfile?.ExpeditionLevel} />
        </ListItem>
        <ListItem>
          <ListItemText primary={armoryProfile?.PvpGradeName} />
        </ListItem>
        <ListItem>
          <ListItemText primary={armoryProfile?.TownName} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default CharInfoBox;
