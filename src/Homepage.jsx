import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Header from "./Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F0B46",
    },
  },
});

const Homepage = (props) => {
  return <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>;
};

export default Homepage;
