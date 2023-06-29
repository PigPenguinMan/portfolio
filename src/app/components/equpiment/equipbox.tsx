import { iSummaryData } from "@/app/character/[charaName]/api.interface";
import { Box } from "@mui/material";
import Equipment from "./equipment";
import { useState } from "react";
import Card from "./card/card";
interface EquipBoxProps {
    summaryData? : iSummaryData | null | undefined
}

const EquipBox = ({summaryData}:EquipBoxProps) => {
    const [category,setCategory] = useState('0')
    const data = summaryData

// 카드 인터페이스 수정필요
    
    return ( 
        <Box>
            <Equipment equipment={data?.ArmoryEquipment}/>
            <Card card={data?.ArmoryCard} />
        </Box>

     );
}
 
export default EquipBox ;