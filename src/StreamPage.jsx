import { useParams } from "react-router-dom";
import React from "react";
import { Box } from "@mui/system";
import { Avatar, Chip, Typography } from "@mui/material";

const StreamPage = (props) => {
  let { channelId } = useParams();

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
        src="https://sm.ign.com/ign_ap/gallery/c/cyberpunk-/cyberpunk-2077-25-new-night-city-images_qd71.jpg"
        alt="channel cover"
        style={styles.coverImage}
      />
      <Box marginTop={"12px"} display={"flex"}>
        <Box width={"10%"} sx={{ position: "relative" }}>
          <Avatar
            sx={{ height: "75px", width: "75px", border: "4px solid #FB2961" }}
          >
            <img src={"https://i.pravatar.cc/150?img=63"} alt="User Avatar" />
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
              fontSize: { xs: "13px", sm: "24px" },
              fontWeight: "bold",
              textAlign: "left",
              color: "white",
            }}
          >
            PBB Connect Daily
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              fontSize: { xs: "12px", sm: "16px" },
              color: "white",
            }}
          >
            @pbbconnect
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StreamPage;
