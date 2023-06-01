"use client";
import { Box, Grid } from "@mui/material";
import React from "react";
import AdBox from "./components/adbox";
import UpdateBox from "./components/updateBox";
import RankingBox from "./components/rankingbox";
import EventBox from "./components/eventbox";
import CalendarBox from "./components/calendarbox";
import FetchData from "./components/datafetch";
import CGuardianBox from "./components/cguardianbox";
type Props = {};

const Home = ({}: Props) => {
  return (
    <Box height="100vh" display="flex">
      <Grid container alignItems="center" sx={{ flexGrow: 1 }}>
        <Grid
          item
          style={{
            border: "1px solid black",
            margin: "10px auto",
            height: "85px",
          }}
          xs={12}
          md={8}
        >
          <Box sx={{ height: "100%" }}>
            <AdBox />
          </Box>
        </Grid>
        <Grid container item justifyContent="space-evenly">
          <Grid item xs={12} md={2.5}>
            <Box height={200}>
              <UpdateBox />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box height="fit-content">
              <EventBox />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box height="fit-content">
              <CGuardianBox />
            </Box>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid container item justifyContent="space-evenly">
            <Grid item xs={12} md={2.5} style={{ border: "1px solid black" }}>
              <Box height={200}>
                <RankingBox />
              </Box>
            </Grid>
            <Grid item xs={12} md={5} style={{ height: "fit-content" }}></Grid>
            <Grid item xs={12} md={3} style={{ height: "fit-content" }}></Grid>
            <Grid
              item
              xs={12}
              md={3}
              style={{ border: "1px solid black" }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
