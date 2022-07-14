import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "./logo.png";

const Header = (props) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box width={"20%"} display={"flex"}>
            <img src={logo} alt="Kumu Logo" height={50} />
          </Box>
          <Link href="#" underline="none" color="white">
            <Typography fontWeight={"fontWeightBold"} fontSize={"18px"}>
              Streams
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
