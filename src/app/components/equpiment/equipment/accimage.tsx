import { Avatar, ListItemAvatar } from "@mui/material";
import QualityBox from "./qualitybox";

interface IconProps{
    icon? : string
    grade? : string
    value? : number
}

const AccImage = ({icon,grade,value}:IconProps) => {
    let bgColor = '#ff0000';
    let bgColor2 ='#00ff00'; 
    if (grade === '고대'){
         bgColor = '#3d3325',
         bgColor2 = '#dcc999'
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
    return ( 
        <ListItemAvatar sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage:`linear-gradient(to bottom right, ${bgColor} ,${bgColor2})`,
            borderRadius: "8px",
            justifyContent:'flex-end',
            height:"100%"
          }}>
        <Avatar variant="rounded" src={icon} >
        </Avatar>
        <QualityBox value={value}/>
      </ListItemAvatar>
     );
}
 
export default AccImage;