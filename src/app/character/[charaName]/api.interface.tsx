// api로 받아오는 데이터 타입지장
interface iSummaryData {
  ArmoryAvatars: Avatar;
  ArmoryCard: CardInfo;
  ArmoryEngraving: Engraving;
  ArmoryEquipment: ArmoryEquipment;
  ArmoryGem: ArmoryGem;
  ArmoryProfile: ArmoryProfile;
  ArmorySkills: ArmorySkills;
  Collectibles: Collectibles;
  ColosseumInfo: ColosseumInfo;
}

// 받아오는 데이터의 속성들 타입지정
// ArmoryAvatars
interface Avatar {
  [index: number]: ItemInAvatar[];
}
interface ItemInAvatar {
  Grade: string;
  Icon: string;
  IsInner: boolean;
  InSet: boolean;
  Name: string;
  Tooltip: string;
  Type: string;
}

// ArmoryCard
interface CardInfo {
  Cards: Card[];
  Effects: EffectsInCard[];
}
interface Card {
  AwakeCount: number;
  AwakeTotal: number;
  Grade: string;
  Icon: string;
  Name: string;
  Slot: number;
  Tooltop: string;
}
interface EffectsInCard {
  [index: number]: EffectArrayInCard[];
}
interface EffectArrayInCard {
  CardSlots: CardSlots[];
  [index: number]: number;
  Items: ItemInEffect[];
}
interface CardSlots {
  [index: number]: number;
}
interface ItemInEffect {
  [index: number]: ItemInEffectArray[];
}
interface ItemInEffectArray {
  Description: string;
  Name: string;
}

// ArmoryEngraving
interface Engraving {
  Effects: EffectsInEngraving[];
  Engravings: EngravingsArray[];
}
interface EffectsInEngraving {
  [index: number]: ItemInEngravingEffect[];
}
interface ItemInEngravingEffect {
  Description: string;
  Name: string;
}
interface EngravingsArray {
  [index: number]: ItemInEngravingsArray[];
}
interface ItemInEngravingsArray {
  Icon: string;
  Name: string;
  Slot: number;
  Tooltop: string;
}

//ArmoryEquipment
interface ArmoryEquipment {
  [index: number]: ItemInArmoryEquipment[];
}
interface ItemInArmoryEquipment {
  Grade: string;
  Icon: string;
  Name: string;
  Tooltip: string;
  Type: string;
}

// ArmoryGem
interface ArmoryGem {
  Effects: EffectsInArmoryGem[];
  Gems: GemsInArmoryGem[];
}
interface EffectsInArmoryGem {
  [index: number]: ItemInEffectsInArmoryGem[];
}
interface ItemInEffectsInArmoryGem {
  Description: string;
  GemSlot: number;
  Icon: string;
  Name: string;
  Tooltip: string;
}
interface GemsInArmoryGem {
  [index: number]: ItemInGemsInArmoryGem[];
}
interface ItemInGemsInArmoryGem {
  Grade: string;
  Icon: string;
  Level: number;
  Name: string;
  Slot: number;
  Tooltip: string;
}

// ArmoryProfile
interface ArmoryProfile{
  CharacterClassName: string;
  CharacterImage: string;
  CharacterLevel: number;
  CharacterName: string;
  ExpeditionLevel: number;
  GuildMemberGrade: string;
  GuildName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
  PvpGradeName: string;
  ServerName: string;
  Stats: StatsInProfile[];
  Tendencies: Tendencies[];
  Title: string;
  TotalSkillPoint: number;
  TownLevel: number;
  TownName: string;
  UsingSkillPoint: number;
}
interface StatsInProfile {
  [index: number]: ArrayInStats[];
}
interface ArrayInStats {
  Tooltip: TooltipInStats[];
  Type: string;
  Value: string;
}
interface TooltipInStats {
  [index: number]: string;
}
interface Tendencies {
  [index: number]: ArrayInTendencies[];
}
interface ArrayInTendencies {
  MaxPoint: number;
  Point: number;
  Type: string;
}

// ArmorySkills
interface ArmorySkills {
  [index: number]: ArrayInSkills[];
}
interface ArrayInSkills {
  Icon: string;
  IsAwakening: boolean;
  Level: number;
  Name: string;
  // 빈값이 들어오면 null로 처리
  Rune: (RuneArray | null)[];
  Tooltip: string;
  Tripods: Tripods[];
  Type: string;
}
interface RuneArray {
  Grade: string;
  Icon: string;
  Name: string;
  Tooltip: string;
}
interface Tripods {
  [index: number]: ArrayInTripods[];
}
interface ArrayInTripods {
  Icon: string;
  IsSelected: boolean;
  Level: number;
  Name: string;
  Slot: number;
  Tier: number;
  Tooltip: string;
}

// Collectibles
interface Collectibles {
  [index: number]: CollectiblesArray[];
}
interface CollectiblesArray {
  CollectiblePoints: CollectiblePoints[];
  Icon: string;
  MaxPoint: number;
  Point: number;
  Type: string;
}
interface CollectiblePoints {
  [index: number]: ArrayInCollectiblePoints[];
}
interface ArrayInCollectiblePoints {
  MaxPoint: number;
  Point: number;
  PointName: string;
}

// ColosseumInfo
interface ColosseumInfo {
  Colosseums: Colosseums[];
  Exp: number;
  PreRank: number;
  Rank: number;
}
interface Colosseums {
  [index: number]: ArrayInColosseums[];
}
interface ArrayInColosseums {
  CoOpBattle: (CoOpBattle | null)[];
  Competitive: (Competitive | null)[];
  Deathmatch: (Deathmatch | null)[];
  SeasonName: string;
  TeamDeathmatch: (TeamDeathmatch | null)[];
  TeamElimination: (TeamElimination | null)[];
}
interface CoOpBattle {
  PlayCount: number;
  VictoryCount: number;
  LoseCount: number;
  TieCount: number;
  KillCount: number;
  AceCount: number;
  DeathCount: number;
}
interface Competitive {
  Rank: number;
  RankName: string;
  RankIcon: string;
  RankLastMmr: number;
  PlayCount: number;
  VictoryCount: number;
  LoseCount: number;
  TieCount: number;
  KillCount: number;
  AceCount: number;
  DeathCount: number;
}
interface Deathmatch {
  PlayCount: number;
  VictoryCount: number;
  LoseCount: number;
  TieCount: number;
  KillCount: number;
  AceCount: number;
  DeathCount: number;
}
interface TeamDeathmatch {
  PlayCount: number;
  VictoryCount: number;
  LoseCount: number;
  TieCount: number;
  KillCount: number;
  AceCount: number;
  DeathCount: number;
}
interface TeamElimination {
  FirstWinCount: number;
  SecondWinCount: number;
  ThirdWinCount: number;
  FirstPlayCount: number;
  SecondPlayCount: number;
  ThirdPlayCount: number;
  AllKillCount: number;
  PlayCount: number;
  VictoryCount: number;
  LoseCount: number;
  TieCount: number;
  KillCount: number;
  AceCount: number;
  DeathCount: number;
}

export type {
  iSummaryData,
  Avatar,
  ItemInAvatar,
  CardInfo,
  Card,
  EffectsInCard,
  EffectArrayInCard,
  CardSlots,
  ItemInEffect,
  ItemInEffectArray,
  Engraving,
  EffectsInEngraving,
  ItemInEngravingEffect,
  EngravingsArray,
  ItemInEngravingsArray,
  ArmoryEquipment,
  ItemInArmoryEquipment,
  ArmoryGem,
  EffectsInArmoryGem,
  GemsInArmoryGem,
  ItemInGemsInArmoryGem,
  ArmoryProfile,
  StatsInProfile,
  ArrayInStats,
  TooltipInStats,
  Tendencies,
  ArrayInTendencies,
  ArmorySkills,
  ArrayInSkills,
  RuneArray,
  Tripods,
  ArrayInTripods,
  Collectibles,
  CollectiblesArray,
  CollectiblePoints,
  ArrayInCollectiblePoints,
  ColosseumInfo,
  Colosseums,
  ArrayInColosseums,
  CoOpBattle,
  Competitive,
  Deathmatch,
  TeamDeathmatch,
  TeamElimination,
};


