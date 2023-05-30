import {
  Box,
  ImageList,
  ImageListItem,
  ListItemButton,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import eventData from "../../data/data (5).json";
import Carousel from "react-material-ui-carousel";

const EventBox = () => {
  const [data, setData] = useState(eventData.events);

  return (
    <Paper elevation={0}>
      {/*MUI에 없는 Carousel을 위해 라이브러리 react-material-ui-carousel사용  */}
      <Carousel indicators={false}>
        {data.map((item) => (
          <Paper key={item.Title} elevation={0} component={"a"} href={item.Link}>
            <img src={item.Thumbnail} width="100%" height="100%" />
          </Paper>
        ))}
      </Carousel>
    </Paper>
  );
};

export default EventBox;
