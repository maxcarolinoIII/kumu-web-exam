import { Box } from "@mui/system";
import React from "react";
import Sidebar from "./Sidebar";

const Content = (props) => {
  return (
    <Box
      sx={{
        bgcolor: "#0F0B46",
        height: "calc(100vh - 64px)",
        borderTop: "1px solid #808080",
        display: "flex",
      }}
    >
      <Sidebar />
    </Box>
  );
};

export default Content;
