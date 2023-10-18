import React from "react";
import { Landing } from "./component/Landing";
import { Card,CardContent } from "@mui/material";
import "./component/common.css";

function App() {
  return (
    <Card sx={{bgcolor:"pink"}}>
      <CardContent>
      <Landing />
      
      </CardContent>
    </Card>
   
  );
}

export default App;

