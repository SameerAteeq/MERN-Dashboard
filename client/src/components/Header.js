import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        textTransform="uppercase"
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px", fontSize: { xs: "22px", md: "28px" } }}
      >
        {title}
      </Typography>
      <Typography
        textTransform="capitalize"
        variant="h5"
        color={theme.palette.secondary[300]}
        sx={{ fontSize: { xs: "14px", md: "16px" } }}
      >
        {subtitle}.
      </Typography>
    </Box>
  );
};

export default Header;
