import { iSummaryData } from "@/app/character/[charaName]/api.interface";
import { Box,Paper } from "@mui/material";
import Equipment from "./equipment";
import { useState } from "react";

interface EquipBoxProps {
    summaryData? : iSummaryData | null | undefined
}

const EquipBox = ({summaryData}:EquipBoxProps) => {
    const [category,setCategory] = useState('0')
    const data = summaryData

    
    return ( 
        <Paper sx={{display:'flex', flexDirection:'column', justifyContent:'space-between' ,height:'100%'}}>
            <Equipment equipment={data?.ArmoryEquipment}/>
            <Box sx={{display:'flex',width:'100%',height:'25%', backgroundColor:'darkgrey'}}>

            </Box>

        </Paper>
     );
}
 
export default EquipBox ;