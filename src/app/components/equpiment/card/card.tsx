import {  CardInfo, EffectArrayInCard } from "@/app/character/[charaName]/api.interface";
import { Box, Paper } from "@mui/material";
import CardList from "./cardlist";
import CardEffect from "./carfeffect";


interface CardProps{
    card? : CardInfo
}
const Card = ({card}:CardProps) => {

    const cardData = card ? Object.values(card).flat().slice(0,6) : []
    const effectData = card? Object.values(card).flat().slice(6,8) : []
    

    return ( 
        <Paper>

            <h4> 카드</h4>
            <CardList card={cardData} effect={effectData} />
            <CardEffect effect={effectData}/>

     </Paper>
     );
}
 
export default Card;