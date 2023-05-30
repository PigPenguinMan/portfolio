import React from "react";
import { useState } from "react";
import calendarData from "../../data/data (5).json";
import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
const CalendarBox = () => {
  const [data, setData] = useState(calendarData.calendar);

  const today = new Date().toISOString().substring(0,10)

  const filterToDate = data.map((item)=>{
    const filterStartTime = item.StartTimes.filter((innerItem)=>{
        const innerDate = innerItem.substring(0,10);
       return innerDate === today
    });
    return {...item ,StartTimes:filterStartTime}
  })

  
  
  return (
    <Paper variant="outlined">
      <List>
        {filterToDate.map((item) => (
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
                        <Typography> {}</Typography>
                </ListItemText>
            </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Paper>
  );
        }

export default CalendarBox;
