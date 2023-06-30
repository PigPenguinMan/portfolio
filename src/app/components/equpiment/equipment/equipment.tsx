import { ArmoryEquipment } from "@/app/character/[charaName]/api.interface";
import {
  Box,
} from "@mui/material";
import EquipList from "./equiplist";
import AccList from "./acclist";

interface EqumientProps {
  equipment?: ArmoryEquipment;
}

const Equipment = ({ equipment }: EqumientProps) => {
  const equipmentData = equipment;
  const flatData = equipmentData ? Object.values(equipmentData).flat() : [];

  // Tooltip에서 필요한 데이터가 있어 Json형식으로 바꿔 사용 
  const tooltipData = flatData.map((item) => JSON.parse(item.Tooltip));

  // 카드 각인 보석 추가 필요
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:'column',
        justifyContent: "space-between",
        width: "100%",
        height: "70%",
      }}
    >
      {/* 장비 */}
      <EquipList equipment={equipment} tooltipData={tooltipData} />
      {/* 오른쪽 액세서리 */}
      <AccList equipment={equipment} tooltipData={tooltipData}/>
    </Box>
  );
};

export default Equipment;
