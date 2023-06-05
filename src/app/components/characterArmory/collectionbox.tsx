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

/* 06/05 수집품 props정리중 종료 , collection을 맵으로 펼치거나 하드코딩으로 완성시키기 */
const ColletionBox = ({ collection }: CollectionBoxProps) => {
    const data = collection;

    return (
    <TableContainer component={Paper}>
      <Table>
        <TableRow>
           <TableCell></TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default ColletionBox;
