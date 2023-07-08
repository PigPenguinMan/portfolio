import {
  CardInfo,
  EffectArrayInCard,
  EffectsInCard,
} from "@/app/character/[charaName]/api.interface";
import { Stack } from "@mui/material";
import CardEffect from "./carfeffect";


interface CardListProps {
  card?: CardInfo["Cards"];
  effect?: EffectArrayInCard[];
}

const CardList = ({ card, effect }: CardListProps) => {


    // if (effect && effect[0].Items.length == 0){
    //     const effect1 = effect[0].Items.slice(-1)[0]
    // }
    // if  (effect && effect[0].Items.length != 0){
    //     const effect1 = effect[0].Items.slice(-1)[0];
    //     const effect2 = effect[1].Items.slice(-1)[0];
    // }

    
        
  return (
    <Stack direction="row" >
      {card?.map((item, index) => (
        <div >
          <div style={{display:'flex',overflow:'hidden',position:'relative',}}>
            <div
              key={index}
              style={{
                display:'flex',
                width: "100%",
                justifyContent:'center',
                alignItems:'center',
              }}
            >
              <img src={item.Icon} style={{ width: "90%", height: "100%" , border:'1px solid black'}} />
            </div>
            <div style={{position:'absolute',bottom: "0", padding: "10%" , width:'100%'}}>
              <div>
                {/*AwakeTotal 이미지를 아래에 깔고 AwakeCont수치만큼 표시  */}
                <div style={{ position: "relative",aspectRatio:'10/3' , backgroundImage:`url(https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/img_profile_awake.png)`,overflow:'hidden',backgroundSize:'cover'}}>
                    <div style={{position:'absolute',width:'100%' , left:`${(item.AwakeCount/item.AwakeTotal)*100 - 100}%`,height:'100%', backgroundImage:`url(https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/img_profile_awake.png)` , backgroundSize:'cover',backgroundPosition:'0px 100%'}}> </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{textAlign:'center'}}>
            {item.Name}
          </div>
            <CardEffect effect={effect}/>

            

        </div>
      ))}
    </Stack>
  );
};

export default CardList;
