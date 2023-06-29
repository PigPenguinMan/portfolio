import {  CardInfo } from "@/app/character/[charaName]/api.interface";
import { Box, Paper } from "@mui/material";
import CardList from "./cardlist";


interface CardProps{
    card? : CardInfo
}
const Card = ({card}:CardProps) => {

    const cardData = card ? Object.values(card).flat().slice(0,6) : []
    const effectData = card? Object.values(card).flat().slice(6,8) : []
    console.log('cardData',cardData);
    console.log('effect',effectData);
    
    

    
    // 세트 , 이미지 
    
    return ( 
        <Box>
            <CardList card={cardData} effect={effectData} />
        </Box>
     );
}
 
export default Card;