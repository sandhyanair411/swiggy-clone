import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';
import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  const imgUrl = `${IMG_URL + data.cloudinaryImageId}`;
  return (
    <Card>
      <CardMedia image={imgUrl} sx={{ height: 140 }} title={data.name} />
      <CardContent>
        <Typography variant="h6">{data.name}</Typography>
        <StarsIcon/> {data.avgRating}
        <Typography variant="body2" color="text.secondary">
          {data.cuisines.join(',')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
