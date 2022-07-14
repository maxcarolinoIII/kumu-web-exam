import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Content = (props) => {
  return (
    <Box
      bgcolor={"#0F0B46"}
      height={"calc(100vh - 64px)"}
      borderTop={"1px solid #808080"}
    >
      <Typography>Test</Typography>
    </Box>
  );
};

export default Content;
