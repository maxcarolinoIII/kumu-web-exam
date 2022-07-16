import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Avatar, Chip, Typography } from "@mui/material";

const StreamPage = (props) => {
  const [channel, setChannel] = useState({
    coverImageUrl: "",
    username: "",
    channelTitle: "",
    userAvatar: "",
  });
  let { channelId } = useParams();

  useEffect(() => {
    async function fetchChannel() {
      const url = new URL("https://liveapi.kumu.live/live/regular-data");

      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "device-id": "desktop",
        },
        body: new URLSearchParams({
          id: channelId,
        }),
      };

      const response = await fetch(url, fetchOptions);
      const { data } = await response.json();

      setChannel({
        coverImageUrl: data.cover_image,
        username: data.liveuser.username,
        channelTitle: data.title,
        userAvatar: data.liveuser.avatar_small,
      });
    }

    fetchChannel();
  }, []);

  const styles = {
    coverImage: {
      height: "70%",
      width: "100%",
      objectFit: "contain",
      backgroundColor: "black",
    },
    chip: {
      backgroundColor: "#FB2961",
      width: "80px",
      border: "2px solid white",
      color: "white",
      position: "absolute",
      left: "0",
      bottom: "-15px",
    },
  };

  return (
    <Box
      sx={{
        padding: "32px",
        paddingTop: { xs: "32px", sm: "56px" },
        flex: "1",
        display: "flex",
        flexDirection: "column",
        borderLeft: { sm: "1px solid #808080" },
        height: "auto",
      }}
    >
      <img
        src={channel.coverImageUrl}
        alt="channel cover"
        style={styles.coverImage}
      />
      <Box marginTop={"12px"} display={"flex"} gap={"8px"}>
        <Box width={"100px"} sx={{ position: "relative" }} maxHeight={"83px"}>
          <Avatar
            sx={{ height: "75px", width: "75px", border: "4px solid #FB2961" }}
          >
            <img src={channel.userAvatar} alt="User Avatar" />
          </Avatar>
          <Chip
            label="LIVE"
            size="small"
            variant="outlined"
            style={styles.chip}
          ></Chip>
        </Box>
        <Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "left",
              color: "white",
            }}
          >
            {channel.channelTitle}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              fontSize: "16px",
              color: "white",
            }}
          >
            @{channel.username}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StreamPage;
