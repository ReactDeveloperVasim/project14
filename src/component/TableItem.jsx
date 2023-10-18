import { Grid } from "@mui/material";
import React from "react";

export const TableItem = ({ itemHeaders, itemRow }) => {
  return (
    <React.Fragment>
      {itemHeaders.map((item) => (
        <Grid item xs={12 / itemHeaders.length}>
          {item}
        </Grid>
      ))}

      {itemRow.map((item) => (
        <Grid item xs={12 / itemRow.length}>
          {item}
        </Grid>
      ))}
    </React.Fragment>
  );
};
