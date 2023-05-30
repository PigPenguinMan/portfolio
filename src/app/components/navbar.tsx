"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputAdornment,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const navItem = ["메인", "캐릭터", "랭킹"];

const Navbar = () => {
  return (
    <CssBaseline>
      {/* reset.css 생성필요 X */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* flexGrow : 아이템의 기본 너비를 자동으로 늘려 적절한 너비로 배치되도록 맞춤 */}
        <AppBar position="sticky">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component={"div"} noWrap>
              Huiseong
            </Typography>
            <FormControl
              variant="standard"
              sx={{
                display: "flex",
                width: "400px",
                margin: "0",
                color: "white",
              }}
            >
              <Input
              // 검색창 앞의 아이콘
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                }
                placeholder=""
                fullWidth
                // 언더라인의 컬러
                sx={{
                  ":before": {
                    borderBottomColor: "white",
                    ":after": { borderBottomColor: "white" },
                  },
                }}
              />
            </FormControl>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItem.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </CssBaseline>
  );
};

export default Navbar;
