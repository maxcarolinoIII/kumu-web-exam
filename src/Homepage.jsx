import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Content from "./Content";
import Header from "./Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F0B46",
    },
  },
  typography: {
    fontFamily: "Kumu, sans-serif",
  },
});

const Homepage = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
    </ThemeProvider>
  );
};

export default Homepage;
