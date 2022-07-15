import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "./logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Header = (props) => {
  const styles = {
    logo: {
      height: "auto",
      width: "100%",
      maxWidth: "100px",
    },
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{ justifyContent: { xs: "space-between", sm: "flex-start", height: "64px" } }}
        >
          <Box sx={{ width: "20%", display: "flex" }}>
            <img src={logo} alt="Kumu Logo" style={styles.logo} />
          </Box>
          <Link
            href="#"
            underline="none"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Typography
              fontWeight={"fontWeightBold"}
              fontSize={"18px"}
              color="white"
            >
              Streams
            </Typography>
          </Link>
          <IconButton
            size="xlarge"
            edge="start"
            aria-label="open drawer"
            sx={{ display: { xs: "block", sm: "none" }, color: "#FB2961" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
