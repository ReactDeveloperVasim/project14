import { Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";

export const ProductItem=({item})=>{
    return(

        <Grid item xs={4}>
             <Card >
            <CardContent>
                 <h4>{item.title.slice(0,40)}</h4>
                 <h6>{item.description.slice(0,100)}...</h6>
                 <img src={item.image} alt="" />
                 <h2>{item.category}</h2>
                 <Rating value={item.rating.rate} />  ({item.rating.count})
            </CardContent>
        </Card>
        </Grid>
       
        // {/* <h1>ProductItem</h1> */}
    );
}