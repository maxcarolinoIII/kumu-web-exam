import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "./logo.png";

const Header = (props) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ width: "20%", display: "flex" }}>
            <img src={logo} alt="Kumu Logo" height={50} />
          </Box>
          <Link href="#" underline="none">
            <Typography
              fontWeight={"fontWeightBold"}
              fontSize={"18px"}
              color="white"
            >
              Streams
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
