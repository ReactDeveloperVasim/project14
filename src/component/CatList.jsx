import { Card, CardContent,Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CatItem } from "./CatItem";

export const CatList=({HandleSelectedCat})=>{
    const[data,setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products/categories");
        setData(result.data);
    };

    useEffect(()=>{
        getData();
    },[])
    return(
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    {
                        data.map((item)=>
                            <CatItem item={item} HandleSelectedCat={HandleSelectedCat}/>
                        )
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}