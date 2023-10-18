import { Grid , Button} from "@mui/material";
import React from "react";

export const CatItem=({item , HandleSelectedCat})=>{
    return(
        <Grid item xs={3}>
            <Button onClick={()=>HandleSelectedCat(item)} variant="contained" color="secondary" fullWidth>{item}</Button>
        </Grid>
    );
}