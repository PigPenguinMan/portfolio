import { Avatar, ListItemAvatar } from "@mui/material";
import QualityBox from "./qualitybox";

interface IconProps{
    icon? : string
    grade? : string
    value? : number
}
const EquipImage = ({icon,grade,value}:IconProps) => {
    let bgColor = 'ff0000';

    if (grade === '고대'){
         bgColor = '#3d3325'
    } else if (grade === '유물'){
         bgColor = ''
    } else if (grade === '전설'){
         bgColor = ''
    } else if (grade === '영웅'){
         bgColor = ''
    } else if (grade === '희귀'){
         bgColor = ''        
    } else if (grade === '고급'){
         bgColor = ''
    } else 
         bgColor = ''




    //06/27 장비창 컴포넌트화 이미지 백그라운드 그래디언트 넣기
    return ( 
        <ListItemAvatar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        //   backgroundColor:,
          borderRadius: "8px",
        height:'100%'
        }}
      >
          <Avatar src={icon} />
        <QualityBox
          value={value}
        />
      </ListItemAvatar>
     );
}
 
export default EquipImage;