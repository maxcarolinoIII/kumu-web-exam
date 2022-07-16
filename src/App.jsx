import React, { useEffect, useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import Header from "./Header";
import { Box } from "@mui/system";
import Sidebar from "./Sidebar";
import StreamList from "./StreamList";
import { Route, Switch } from "react-router-dom";
import StreamPage from "./StreamPage";

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
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [expanded, setExpanded] = useState(true);
  const [perRow, setPerRow] = useState(isDesktop ? 5 : 2);
  const [rows, setRows] = useState(2);
  const [streams, setStreams] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const url = new URL("https://liveapi.kumu.live/site/get-browse-live");
      url.search = new URLSearchParams({
        mode: "all",
        page,
        prev_ids: "",
      }).toString();

      const result = await fetch(url);
      const data = await result.json();

      setStreams(
        [...data.data.lives].map((live) => ({
          title: live.title,
          username: `@${live.username}`,
          image: live.cover_image,
          channelId: live.channel_id,
          viewers: live.audience_count,
        }))
      );

      setTopUsers(
        [...data.data.lives.slice(0, 6)].map((live) => ({
          username: live.username,
          avatar: live.avatar,
        }))
      );
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchMoreData() {
      const url = new URL("https://liveapi.kumu.live/site/get-browse-live");
      url.search = new URLSearchParams({
        mode: "all",
        page: page + 1,
        prev_ids: "",
      }).toString();

      const result = await fetch(url);
      const data = await result.json();

      setStreams([
        ...streams,
        ...[...data.data.lives].map((live) => ({
          title: live.title,
          username: `@${live.username}`,
          avatar: live.avatar,
          image: live.cover_image,
          channelId: live.channel_id,
          viewers: live.audience_count,
        })),
      ]);

      setPage(page + 1);
    }

    if (streams.length !== 0 && perRow * rows > streams.length) {
      fetchMoreData();
    }
  }, [perRow, rows]);

  useEffect(() => {
    if (isDesktop) {
      setPerRow(expanded ? 5 : 6);
    } else {
      setPerRow(2);
    }
  }, [isDesktop]);

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
            overflow: "scroll",
          }}
        >
          <Sidebar
            expanded={expanded}
            setExpanded={(expanded) => {
              setExpanded(!expanded);
              setPerRow(!expanded ? 5 : 6);
            }}
            topUsers={topUsers}
          />
          <Switch>
            <Route path={"/:channelId"}>
              <StreamPage />
            </Route>
            <Route path="/">
              <StreamList
                expanded={expanded}
                columns={perRow}
                streams={streams.slice(0, perRow * rows)}
                onShowMore={() => {
                  setRows(rows + 2);
                }}
              />
            </Route>
          </Switch>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
