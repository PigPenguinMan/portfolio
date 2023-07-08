import { EffectArrayInCard } from "@/app/character/[charaName]/api.interface";
import { useEffect, useState } from "react";

interface CardEffectProps {
  effect?: EffectArrayInCard[];
}

const CardEffect = ({ effect }: CardEffectProps) => {
  const [effectNumber, setEffectNumber] = useState(1);

  const effectNumberCheck = () => {
    if (effect && effect[1].Items.length == 0) {
      setEffectNumber(2);
    }
    if (effect && effect[1].Items.length != 0) {
      setEffectNumber(1);
    }
  };

  const efftectSplit = effect
    ? effect[0].Items.slice(-1)[0].Name.split(" ")
    : 0;
  const filterName = efftectSplit.slice(0, -2).map((item) => item[0]);
  console.log(filterName);
//카드 세트 효과 표시되게 하기
  useEffect(() => {
    effectNumberCheck;
  }, []);
  return <>{effectNumber == 1 ? <div>{
    <h4>{}</h4>
    }</div> : <div></div>}</>;
};

export default CardEffect;
