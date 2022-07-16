import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "./logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";

const Header = (props) => {
  const styles = {
    logo: {
      height: "auto",
      width: "100%",
      maxWidth: "100px",
    },
  };
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: {
              xs: "space-between",
              sm: "flex-start",
              height: "64px",
            },
          }}
        >
          <Box sx={{ width: "20%", display: "flex" }}>
            <img src={logo} alt="Kumu Logo" style={styles.logo} />
          </Box>
          <Link
            component={RouterLink}
            to="/"
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
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(!drawerOpen)}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "#0F0B46",
            position: "relative",
          }}
        >
          <Box
            sx={{
              padding: "24px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              sx={{ color: "#FB2961" }}
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <CloseIcon sx={{ fontSize: "32px" }} />
            </IconButton>
          </Box>
          <List>
            <ListItem>
              <ListItemButton>
                <Link component={RouterLink} to="/">
                  <ListItemText
                    primary="Streams"
                    primaryTypographyProps={{
                      style: {
                        fontSize: "20px",
                        color: "#FB2961",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              bottom: "64px",
              position: "absolute",
            }}
          >
            <img src={logo} alt="Kumu Logo" style={styles.logo} />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
