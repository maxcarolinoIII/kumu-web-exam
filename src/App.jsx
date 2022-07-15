import React, { useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { Box } from "@mui/system";
import Sidebar from "./Sidebar";
import StreamList from "./StreamList";

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

const App = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Box
          sx={{
            bgcolor: "#0F0B46",
            height: "calc(100vh - 64px)",
            borderTop: "1px solid #808080",
            display: "flex",
          }}
        >
          <Sidebar
            expanded={expanded}
            setExpanded={(expanded) => setExpanded(expanded)}
          />
          <StreamList expanded={expanded} />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
