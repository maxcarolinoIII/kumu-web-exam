import React, { useEffect, useState } from "react";
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
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = new URL("https://liveapi.kumu.live/site/get-browse-live");
      url.search = new URLSearchParams({
        mode: "all",
        page: 1,
        prev_ids: "",
      }).toString();

      const result = await fetch(url);
      const data = await result.json();

      setStreams(
        [...data.data.lives].map((live) => ({
          title: live.title,
          username: `@${live.username}`,
          avatar: live.avatar,
          image: live.cover_image,
          channelId: live.channel_id,
          viewers: live.audience_count,
        }))
      );
    }

    fetchData();
  }, []);

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
          <StreamList expanded={expanded} streams={streams} />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
