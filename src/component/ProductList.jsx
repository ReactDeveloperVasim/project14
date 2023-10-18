import React, { useEffect, useState } from "react";
import { CatList } from "./CatList";
import axios from "axios";
import { ProductItem } from "./ProductItem";
import { Grid } from "@mui/material";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const[selectCat,setSelectCat]=useState("jewelery");

  const getData = async () => {
    const result = await axios.get(`https://fakestoreapi.com/products/category/${selectCat}`);
    setData(result.data);
  };

  const HandleSelectedCat=(cat)=>{
        setSelectCat(cat);
  }


  useEffect(() => {
    getData();
  }, [selectCat]);

  return (
    <React.Fragment>
      <Grid container spacing={2} align="center">
        <Grid xs={12} sx={{marginTop:"20px"}}>
          <CatList HandleSelectedCat={HandleSelectedCat}/>
        </Grid>

        {data.map((item) => (
          <ProductItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
