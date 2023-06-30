import {
  CardInfo,
  EffectsInCard,
} from "@/app/character/[charaName]/api.interface";
import { Stack } from "@mui/material";


interface CardListProps {
  card?: CardInfo["Cards"];
  effect?: EffectsInCard;
}

const CardList = ({ card, effect }: CardListProps) => {
  return (
    <Stack direction="row" >
      {card?.map((item, index) => (
        <div>
          <div style={{display:'flex',overflow:'hidden',position:'relative',}}>
            <div
              key={index}
              style={{
                display:'flex',
                width: "100%",
                justifyContent:'center',
                alignItems:'center'
              }}
            >
              <img src={item.Icon} style={{ width: "90%", height: "90%" }} />
            </div>
            <div style={{position:'absolute',bottom: "0", padding: "10%" , width:'100%'}}>
              <div>
                <div style={{ position: "relative",aspectRatio:'10/3' , backgroundImage:`url(https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/img_profile_awake.png)`,overflow:'hidden',backgroundSize:'cover'}}>
                    {/* item의 툴팁의 각성수치따라 left변경 (tooltip json 으로 변경해서 사용)  */}
                    <div style={{position:'absolute',width:'100%' , left:'',height:'100%', backgroundImage:`url(https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/img_profile_awake.png)` , backgroundSize:'cover',backgroundPosition:'0px 100%'}}> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Stack>
  );
};

export default CardList;
