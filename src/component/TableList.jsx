import { CardContent, Grid, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TableItem } from "./TableItem";

export const TableList = () => {
  const obj = { id: "1", name: "user22", age: "26", work: "programmer" };
  const [itemHeaders, setItemHeaders] = useState([]);
  const[itemRow,setItemRow]=useState([]);

  useEffect(() => {
    const keys = Object.keys(obj);
    setItemHeaders(keys);
    const values=Object.values(obj);
    setItemRow(values);
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <TableItem itemHeaders={itemHeaders} itemRow={itemRow} />
        </Grid>
      </CardContent>
    </Card>
  );
};
