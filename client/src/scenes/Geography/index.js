import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import Header from "components/Header";
import Loader from "components/Loader";
import React from "react";
import { useGetGeographyQuery } from "state/api";
import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetGeographyQuery();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box sx={{ m: { xs: "1rem 1.2rem", md: "1.5rem 2.5rem" }, pb: "10px" }}>
      <Header title="GEOGRAPHY" subtitle="Find where your users are located" />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? (
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.primary[200],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[100],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary[300],
                },
              },
            }}
            features={geoData?.features}
            margin={{
              top: isNonMobile ? 50 : 0,
              right: 0,
              bottom: 0,
              left: -10,
            }}
            domain={[0, 60]}
            colors="PuBu"
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isNonMobile ? 120 : 70}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="gray"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 0,
                translateY: -120,
                itemsSpacing: 2,
                itemWidth: 70,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.primary[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.background.alt,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default Geography;
