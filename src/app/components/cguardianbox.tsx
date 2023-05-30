import {
  Card,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import guardData from "../../data/data (5).json";
const CGuardianBox = () => {
  const [data, setData] = useState(guardData.cGuard);
  return (
    <Paper variant="outlined">
      <Typography variant="h6">이번 주 도전 가디언토벌</Typography>
      <ImageList cols={1}>
        {data.Raids.map((item) => (
          <ImageListItem key={item.Name}>
            <img src={item.Image} alt={item.Name} />
            <ImageListItemBar
              title={
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  {item.Name}
                </Typography>
              }
              sx={{ background: "rgba(0,0,0,0)" }}
            />
          </ImageListItem>
        ))}         
      </ImageList>
    </Paper>
  );
};

export default CGuardianBox;
