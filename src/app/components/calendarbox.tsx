import React from "react";
import { useState } from "react";
import calendarData from "../../data/data (5).json";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
const CalendarBox = () => {
  const [data, setData] = useState(calendarData.calendar);
  console.log(data);

  return (
    <Paper variant="outlined">
      <List>
        {data.map((item) => (
          <Card variant="outlined">
            <CardContent sx={{padding:'0 0' , textAlign:'center'}}> 
                <Typography variant='caption'  >
                    {item.CategoryName}
                </Typography>
            <ListItem key={item.CategoryName}>  
                <ListItemAvatar >
              <Avatar variant="square">
                <img src={item.ContentsIcon} />
              </Avatar>
                </ListItemAvatar>

                <ListItemText   >
                        <Typography variant="caption">{item.ContentsName}</Typography>
                        <Typography> 시간</Typography>
                </ListItemText>
            </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Paper>
  );
};

export default CalendarBox;
