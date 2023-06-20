import { Collectibles, CollectiblesArray } from "@/app/character/[charaName]/api.interface";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
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
      <Table>
        <TableRow >
           {flatData.map((item , index)=>(
            <TableCell key={index}>
                <img src={item.Icon}/>
            </TableCell>
           ))}
           {/* 06/20 tableBody 완성시키기 */}
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default ColletionBox;
