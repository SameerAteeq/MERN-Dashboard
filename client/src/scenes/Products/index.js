import { Box, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import Loader from "components/Loader";
import React from "react";
import { useGetProductsQuery } from "state/api";
import Product from "./Product";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px)");

  return (
    <Box sx={{ m: { xs: "1rem 1.2rem", md: "1.5rem 2.5rem" }, pb: "10px" }}>
      <Header title="Products" subtitle="See your list of products" />
      {data ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div ": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data?.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              state,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                state={state}
              />
            )
          )}
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Products;
