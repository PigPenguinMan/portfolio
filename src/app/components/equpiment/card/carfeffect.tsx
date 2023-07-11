import { EffectArrayInCard } from "@/app/character/[charaName]/api.interface";
import { useEffect, useState } from "react";
import EffecetNumber1 from "./cardset/effectnumber1";
import EffectNumber2 from "./cardset/effectnumber2";

interface CardEffectProps {
  effect?: EffectArrayInCard[];
}

const CardEffect = ({ effect }: CardEffectProps) => {
  const [effectNumber, setEffectNumber] = useState<Number>(1);

  const effectNumberCheck = () => {
    if (effect && effect[1].Items.length == 0) {
      setEffectNumber(1);
    } else {
      setEffectNumber(2);
    }
  };

  
  //카드 세트 효과 표시되게 하기
  useEffect(() => {
    effectNumberCheck;
  }, []);
  return effectNumber == 1 ? (
        <EffecetNumber1 effect={}/>
  ) : (
        <EffectNumber2 effect={}/>
  );
};

export default CardEffect;
