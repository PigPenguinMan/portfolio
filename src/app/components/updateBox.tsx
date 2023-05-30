import React from "react";
import { useState } from "react";
import noticesData from "../../data/data (5).json";
import { Box, ListItemButton, ListItemText, Paper } from "@mui/material";
const UpdateBox = () => {
  const [data, setData] = useState(noticesData.notices);

  return (
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        overflow={"hidden"}
        alignItems="center"
      >
      <Paper variant="outlined" sx={{width:'100%',height:'200px' }}>
        {data
          ? data.map((item) => (
              <ListItemButton component="a" href={item.Link} key={item.Date} sx={{textAlign:'center'}}>
                <ListItemText
                  primary={item.Date.substring(5, 10) + " 업데이트 내역"}
                />
              </ListItemButton>
            ))
            : null}
            </Paper>
      </Box>
  );
};

export default UpdateBox;
