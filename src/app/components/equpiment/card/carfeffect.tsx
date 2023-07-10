import { EffectArrayInCard, ItemInEffectArray } from "@/app/character/[charaName]/api.interface";
import { useEffect, useState } from "react";

interface CardEffectProps {
  effect?: EffectArrayInCard[];
}

const CardEffect = ({ effect }: CardEffectProps) => {
  const [effectNumber, setEffectNumber] = useState(1);

  const effectNumberCheck = () => {
    if (effect && effect[1].Items.length == 0) {
      setEffectNumber(2);
    } else {
      setEffectNumber(1);
    }
  };

console.log(effect
    );

  
  const cardSet  = effect? effect[0].Items.slice(-1)[0] : []  
  const paranRegExe = /\(([^]+)\)/
  console.log(cardSet);
//   const setName = cardSet.Name ;
//   if(cardSet &&){
//     const matches = 

//   }

  
  //   const efftectSplit = effect
  //     ? effect[0].Items.slice(-1)[0].Name.split(" ")
  //     : 0;
  // let filterName = efftectSplit.slice(0, -2).map((item) => item[0]);
  //   if (effectNumber == 1 && filterName.length > 0){
  //     filterName = [filterName.join("")];
  //   } else {

  //   }
  //카드 세트 효과 표시되게 하기
  useEffect(() => {
    effectNumberCheck;
  }, []);
  return <div></div>;
};

export default CardEffect;
