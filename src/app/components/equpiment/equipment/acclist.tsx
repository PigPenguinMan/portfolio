import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";
import QualityBox from "./qualitybox";
import { ArmoryEquipment } from "@/app/character/[charaName]/api.interface";

interface AccProps {
    equipment?: ArmoryEquipment;
    tooltipData?: any;
  }
const AccList = ({equipment,tooltipData}:AccProps) => {
    const data = equipment ;
    const flatData = data ? Object.values(data).flat() : []

    return ( 
        <Paper >
        <List sx={{ display: "flex", flexDirection: "column" ,}}>
          {flatData.slice(6, 13).map((item, index) => (

              <ListItem key={index} sx={{height:'100%'}}>
                <ListItemAvatar sx={{display:'flex',flexDirection:'column',alignItems: "center"}}>
                  <Avatar variant="rounded" src={item.Icon} >
                  </Avatar>
                  <QualityBox value={tooltipData[index].Element_001.value.qualityValue}/>
                </ListItemAvatar>
                <ListItemText primary={item.Name} secondary={item.Type} />
              </ListItem>

          ))}
        </List>
      </Paper>
     );
}
 
export default AccList;