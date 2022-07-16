import { Box } from "@mui/system";
import React from "react";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const Sidebar = (props) => {
  return (
    <Box
      sx={{
        width: props.expanded ? "15%" : "5%",
        padding: "12px",
        display: { xs: "none", sm: 'block' },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => props.setExpanded(props.expanded)}>
          <LoginIcon
            sx={{
              color: "#4AEFE9",
              fontSize: "32px",
              transform: props.expanded ? "rotate(180deg)" : "",
            }}
          />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          sx={{
            color: "#FB2961",
            fontSize: "20px",
            fontWeight: "bold",
            paddingLeft: "16px",
          }}
        >
          Users
        </Typography>
      </Box>
      <Box>
        <List sx={{ width: "100%" }}>
          {props.topUsers.map((user, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <img src={user.avatar} alt="User Avatar" />
                </Avatar>
              </ListItemAvatar>
              {props.expanded && (
                <ListItemText
                  primary={user.username}
                  sx={{ color: "white" }}
                  primaryTypographyProps={{
                    style: {
                      whiteSpace: "normal",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    },
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
