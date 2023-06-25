import { iSummaryData } from "@/app/character/[charaName]/api.interface";
import { Box } from "@mui/material";
import Equipment from "./equipment";
import { useState } from "react";

interface EquipBoxProps {
    summaryData? : iSummaryData | null | undefined
}

const EquipBox = ({summaryData}:EquipBoxProps) => {
    const [category,setCategory] = useState('0')
    const data = summaryData

    
    return ( 
        <Box>
            <Equipment equipment={data?.ArmoryEquipment}/>
        </Box>
            

     );
}
 
export default EquipBox ;