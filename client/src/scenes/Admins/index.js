import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DataGridCustomColumnMenu from "components/DataGridCustomColumnMenu";
import Header from "components/Header";
import React from "react";
import { useGetAdminsQuery } from "state/api";

const Admins = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetAdminsQuery();
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 190,
    },
    {
      field: "name",
      headerName: "Name",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 190,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 140,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      width: 70,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      width: 190,
    },
    {
      field: "role",
      headerName: "Role",
      width: 70,
    },
  ];

  return (
    <Box sx={{ m: { xs: "1rem 1.2rem", md: "1.5rem 2.5rem" }, pb: "10px" }}>
      <Header title="ADMINS" subtitle="Managing Admins and List of Admins" />
      <Box
        my="20px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading}
          rows={data || []}
          columns={columns}
          getRowId={(row) => row._id}
          //   components={{
          //     ColumnMenu: DataGridCustomColumnMenu,
          //   }}
        />
      </Box>
    </Box>
  );
};

export default Admins;
