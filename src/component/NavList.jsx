import { Grid } from "@mui/material";
import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { NavData } from "./NavData";

export const NavList=()=>{
    const[data,setData]=useState(NavData);


    return(
            <Grid container spacing={2}> 
                {
                    data.map((item)=>
                        <NavItem item={item}/>
                    )
                }
            </Grid>
        );
}