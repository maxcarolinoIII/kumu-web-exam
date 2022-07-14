import { Box } from "@mui/system";
import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const Sidebar = (props) => {
  const [expanded, setExpanded] = useState(true);

  const users = [
    {
      username: "Max",
      avatar: "https://i.pravatar.cc/50?img=68",
    },
    {
      username: "Max",
      avatar: "https://i.pravatar.cc/50?img=68",
    },
    {
      username: "Max",
      avatar: "https://i.pravatar.cc/50?img=68",
    },
    {
      username: "Max",
      avatar: "https://i.pravatar.cc/50?img=68",
    },
    {
      username: "Max",
      avatar: "https://i.pravatar.cc/50?img=68",
    },
    {
      username: "Max",
      avatar: "https://i.pravatar.cc/50?img=68",
    },
  ];

  return (
    <Box
      sx={{
        width: expanded ? "15%" : "5%",
        padding: "12px",
        borderRight: "1px solid #808080",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <ChevronLeftIcon sx={{ color: "white", fontSize: "32px" }} />
          ) : (
            <ChevronRight sx={{ color: "white", fontSize: "32px" }} />
          )}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{ color: "#FB2961", fontSize: "20px", fontWeight: "bold" }}
        >
          Users
        </Typography>
      </Box>
      <Box>
        <List sx={{ width: "20%" }}>
          {users.map((user, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <img src={user.avatar} alt="sample user avatar" />
                </Avatar>
              </ListItemAvatar>
              {expanded && (
                <ListItemText primary={user.username} sx={{ color: "white" }} />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
