import { Box, ImageList, ImageListItem, ListItemButton } from "@mui/material";
import React, { useState } from "react";
import eventData from "../../data/data (5).json";

const EventBox = () => {
  const [data, setData] = useState(eventData.events);

  return (
    <Box
      height="100%"
      width="100%"
      overflow="scroll"
      //   display="flex"
      //   flexDirection="column"
    >
      <ImageList cols={1} gap={1} sx={{ margin: "0", width: "100%" }}>
        {data.map((item) => (
          <ImageListItem key={item.Title} component={"a"} href={item.Link}>
            <img
              src={`${item.Thumbnail}?h=150&crop=auto&format=auto   `}
              srcSet={`${item.Thumbnail}?h=150&crop=auto&format=auto`}
              alt={item.Title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default EventBox;
