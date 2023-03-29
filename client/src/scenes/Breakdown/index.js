import { Box } from "@mui/material";
import BreakDownChart from "components/BreakDownChart";
import Header from "components/Header";
import React from "react";

const Breakdown = () => {
  return (
    <Box sx={{ m: { xs: "1rem 1.2rem", md: "1.5rem 2.5rem" }, pb: "10px" }}>
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box height="75vh" mt="40px">
        <BreakDownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
