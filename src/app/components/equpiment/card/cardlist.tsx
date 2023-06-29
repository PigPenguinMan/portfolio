import {  CardInfo, EffectsInCard } from "@/app/character/[charaName]/api.interface";
import { List, Paper } from "@mui/material";

interface CardListProps{
    card? : CardInfo["Cards"]
    effect? : EffectsInCard
}

const CardList = ({card,effect} : CardListProps) => {
console.log(card);

    
    return ( 
        <Paper>
            <List>

            </List>
        </Paper>
     );
}
 
export default CardList;