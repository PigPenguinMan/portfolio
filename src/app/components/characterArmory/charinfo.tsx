

import { ArmoryProfile } from "@/app/character/[charaName]/api.interface";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

interface CharInfoBoxProps {
    armoryProfile?: ArmoryProfile
}

const CharInfoBox = ({armoryProfile}:CharInfoBoxProps) => {
    const data = Array(armoryProfile)

    
    return ( 
        <Paper variant="outlined" >
            <List > 
                    <ListItem>
                        <ListItemText primary={armoryProfile?.CharacterLevel}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={armoryProfile?.ServerName}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={armoryProfile?.GuildName}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={armoryProfile?.ItemAvgLevel}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={armoryProfile?.Title}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={armoryProfile?.ExpeditionLevel}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={armoryProfile?.PvpGradeName}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={armoryProfile?.TownName}/>
                    </ListItem>
            </List>
        </Paper>
     );
}
 
export default CharInfoBox;