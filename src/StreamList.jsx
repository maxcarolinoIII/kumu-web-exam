import { Masonry } from "@mui/lab";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const StreamList = (props) => {
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
    badge: {
      position: "absolute",
      top: "10px",
      right: "8px",
      borderRadius: "999px",
      backgroundColor: "rgba(0,0,0,0.6)",
      color: "white",
      display: "flex",
      width: "fit-content",
      padding: "4px 10px",
      gap: "12px",
      alignItems: "center",
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
        height: "fit-content",
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
      <Masonry
        columns={{ xs: 2, sm: props.columns }}
        spacing={2}
        sx={{ width: "auto" }}
      >
        {props.streams.map((stream, index) => (
          <Card
            component={RouterLink}
            to={`/${stream.channelId}`}
            key={index}
            sx={{ maxWidth: 345 }}
            style={styles.card}
          >
            <CardActionArea>
              <CardMedia
                component={"img"}
                height={"250"}
                image={stream.image}
                alt="stream image"
              />
              <div style={styles.badge}>
                <VisibilityIcon sx={{ width: "18px", height: "18px" }} />
                {stream.viewers}
              </div>
              <div style={styles.overlay}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: { xs: "13px", sm: "16px" },
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  {stream.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "left",
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  {stream.username}
                </Typography>
              </div>
            </CardActionArea>
          </Card>
        ))}
      </Masonry>
      <Link
        href="#"
        color="#FB2961"
        sx={{ marginTop: "24px" }}
        onClick={() => props.onShowMore()}
      >
        <Typography
          fontWeight={"fontWeightBold"}
          fontSize={"18px"}
          sx={{ color: "#FB2961" }}
        >
          Show More
        </Typography>
      </Link>
    </Box>
  );
};

export default StreamList;
