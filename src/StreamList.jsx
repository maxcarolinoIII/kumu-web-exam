import { Masonry } from "@mui/lab";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const StreamList = (props) => {
  const streams = [
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      title: "PBB Connect Daily",
      username: "@pbbconnect",
      viewers: 420,
      image: "https://i.pravatar.cc/300?img=13",
    },
  ];

  const styles = {
    card: {
      position: "relative",
      border: "2px solid #FB2961",
    },
    overlay: {
      position: "absolute",
      bottom: "10px",
      left: "8px",
      right: "8px",
      borderRadius: "5px",
      background: "#261067",
      color: "white",
      padding: "4px",
    },
  };

  return (
    <Box
      sx={{
        padding: "32px",
        paddingTop: "56px",
        flex: "1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "#FB2961",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "left",
          marginBottom: "24px",
        }}
      >
        Streams
      </Typography>
      <Masonry columns={5} spacing={2}>
        {streams.map((stream, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} style={styles.card}>
            <CardActionArea>
              <CardMedia
                component={"img"}
                height={"250"}
                image={stream.image}
                alt="stream image"
              />
              <div style={styles.overlay}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  {stream.title}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  {stream.username}
                </Typography>
              </div>
            </CardActionArea>
          </Card>
        ))}
      </Masonry>
    </Box>
  );
};

export default StreamList;
