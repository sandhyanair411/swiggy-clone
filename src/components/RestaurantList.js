import { Grid } from "@mui/material";
import React from "react";

import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ data }) => {
  return (
    <>
      <Grid container spacing={1} style={{
    margin: 0,
    width: '100%',
  }}>
        {data.map((item) => {
          const { data: restaurantData } = item;
          return (
            <Grid item xs={12} md={3} key={restaurantData.id}>
              <RestaurantCard data={restaurantData} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default RestaurantList;
