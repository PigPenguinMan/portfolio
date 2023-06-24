import { Collectibles, CollectiblesArray } from "@/app/character/[charaName]/api.interface";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface CollectionBoxProps {
  collection?:Collectibles
}

const ColletionBox = ({ collection }: CollectionBoxProps) => {
    const data = collection;
    
    //Collectibles 객체를 맵으로 펴기 
    const flatData = data ? Object.values(data).flat() : []
    return (
    <TableContainer component={Paper}>
      <Table sx={{display:'flex', flexDirection:'column'}}>
        <TableHead >
        <TableRow sx={{display:'flex' , justifyContent:'space-around'}} >
           {flatData.map((item , index)=>(
               <TableCell key={index} sx={{display:'flex',justifyContent:'space-around',alignItems:'center',maxHeight:'25px' , maxWidth:'25px' , borderBottom:'none'}}>
                <img src={item.Icon} style={{height:'30px', width:'30px' , borderRadius:'3px' }}/>
            </TableCell>
           ))}
        </TableRow>
           </TableHead>
           <TableBody >
            <TableRow sx={{display:'flex' , flexDirection:'rows' , justifyContent:'space-around'}}>
                {flatData.map((item , index) =>(
                    <TableCell key={index} sx={{display:'flex',justifyContent:'space-around',alignItems:'center',height:'20px',maxWidth:'25px'}}>
                        {item.Point}
                    </TableCell>
                ))}
            </TableRow>
           </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ColletionBox;
