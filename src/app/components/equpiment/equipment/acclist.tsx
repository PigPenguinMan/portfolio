import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";
import QualityBox from "./qualitybox";
import { ArmoryEquipment } from "@/app/character/[charaName]/api.interface";
import AccImage from "./accimage";

interface AccProps {
    equipment?: ArmoryEquipment;
    tooltipData?: any;
  }
const AccList = ({equipment,tooltipData}:AccProps) => {
    const data = equipment ;
    const flatData = data ? Object.values(data).flat() : []

    
    return ( 
        
        <Paper >
            <h4>장신구</h4>
        <List sx={{ display: "flex"}}>
          {flatData.slice(6, 13).map((item, index) => (

              <ListItem key={index} >
                <AccImage icon={item.Icon} grade={item.Grade} value={tooltipData[index].Element_001.value.qualityValue}/>
                <ListItemText secondary={item.Type === '어빌리티 스톤' ? '돌' : item.Type} sx={{textAlign:'center'}} />
              </ListItem>

          ))}
        </List>
      </Paper>
     );
}
 
export default AccList;