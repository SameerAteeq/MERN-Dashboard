import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, useTheme } from "@mui/material";

const Loader = () => {
  const theme = useTheme();
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "60vh" }}
    >
      <Typography>Please wait...</Typography>
      <CircularProgress
        size="18px"
        sx={{ color: theme.palette.primary[100] }}
      />
    </Stack>
  );
};
export default Loader;
