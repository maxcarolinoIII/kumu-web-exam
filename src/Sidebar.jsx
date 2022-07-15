import { Box } from "@mui/system";
import React from "react";
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
  return (
    <Box
      sx={{
        width: props.expanded ? "15%" : "5%",
        padding: "12px",
        borderRight: "1px solid #808080",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => props.setExpanded(props.expanded)}>
          {props.expanded ? (
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
                  <img src={user.avatar} alt="sample user avatar" />
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
