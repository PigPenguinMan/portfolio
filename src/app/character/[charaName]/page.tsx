"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Box, Grid, Paper } from "@mui/material";
import AdBox from "@/app/components/adbox";
import ArmoryNameBox from "@/app/components/characterArmory/namebox";
import CharInfoBox from "@/app/components/characterArmory/charinfo";
import ColletionBox from "@/app/components/characterArmory/collectionbox";

const Page = ({}) => {
  const [charaData, setCharaData] = useState([]);
  const [summaryData,setSummaryData] = useState([])
  // characterName
  const { charaName } = useParams();
  const decodeName = decodeURIComponent(charaName);

  // characterName이 있는 계정의 모든 캐릭터정보 데이터
  const fetchCharaData = async () => {
    try {
      const response = await axios.get(
        `https://developer-lostark.game.onstove.com/characters/${decodeName}/siblings`,
        {
          headers: {
            Accept: "applicaton/json",
            Authorization:
              "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNTM1NjkifQ.WsNfKSlrdG-CbZiIYktklYNycVoyXZCvXgDWeLW-kwdS7Pf4Yp6MAOaGfgLkPDL7nmrob91IzQa6ox-Q8ssvoZFU7X3dL_Fvq5yJG5wa7ZgifJ4LAkOPbS61BeRx-SktRZkuz4_mQFNupV1qH4wB8c-n7qTPcJYojk5gBIr6FqwpmrYGATOI8r2v9xz8MKCJQTEBWvdcQBS6yiMHvOZRaTNwYVUwCd9hEeFkm1Uh2ifwPTvqrDet9S_5tk4L4xlNd6u88xvv6CIgFY96MPFXZLSUypdCs9bln4buP2EtTjnBlvOb-n1aaECZP3KlwMF0vN5O0AYaUwZabsXwU9kGrw",
          },
        }
      );
      setCharaData(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  const fetchSummaryData = async () => {
    try {
      const response = await axios.get(
        `https://developer-lostark.game.onstove.com/armories/characters/${decodeName}`,
        {
          headers: {
            Accept: "applicaton/json",
            Authorization:
              "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNTM1NjkifQ.WsNfKSlrdG-CbZiIYktklYNycVoyXZCvXgDWeLW-kwdS7Pf4Yp6MAOaGfgLkPDL7nmrob91IzQa6ox-Q8ssvoZFU7X3dL_Fvq5yJG5wa7ZgifJ4LAkOPbS61BeRx-SktRZkuz4_mQFNupV1qH4wB8c-n7qTPcJYojk5gBIr6FqwpmrYGATOI8r2v9xz8MKCJQTEBWvdcQBS6yiMHvOZRaTNwYVUwCd9hEeFkm1Uh2ifwPTvqrDet9S_5tk4L4xlNd6u88xvv6CIgFY96MPFXZLSUypdCs9bln4buP2EtTjnBlvOb-n1aaECZP3KlwMF0vN5O0AYaUwZabsXwU9kGrw",
          },
        }
      );
      setSummaryData(response.data);
    } catch (error) {
      console.error("error", error);
    }
  }
//   useEffect(() => {
//     fetchCharaData();
//     fetchSummaryData()
//   }, []);

  // 계정의 캐릭터중에 검색한 캐릭터이름을 가진 요소만 필터링
//   const findChara = charaData?.filter(
//     (item: any) => item.CharacterName === decodeName
//   );




// armory로 받아온 데이터를 prop으로 각 컴포넌트로 내려준다
  return (
    <Box height="100vh">
      <Grid container alignItems={"center"} justifyContent={'center'} sx={{ flexGrow: 1 }}>
        <Grid
          item
          xs={12}
          md={8}
          justifyContent={"center"}
          sx={{
            border: "1px solid black",
            margin: "10px auto",
            height: "85px",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <AdBox />
          </Box>
        </Grid>
        <Grid item xs={12} md={11} mb={1} >
          <Paper variant="outlined" sx={{height:'45px'}} >
          <ArmoryNameBox/>
          </Paper>
        </Grid>
        <Grid container item md={11} justifyContent={'space-between'} sx={{ height: "90vh" }}>
          <Grid container item flexDirection={'column'} justifyContent={'flex-start'} xs={12} md={3.5} >
            <Paper >
                <CharInfoBox/>
            </Paper>
            <Paper >
                <ColletionBox />
            </Paper>
          </Grid>
          <Grid item xs={12} md={7.5}>
            <Paper variant="outlined" ></Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
