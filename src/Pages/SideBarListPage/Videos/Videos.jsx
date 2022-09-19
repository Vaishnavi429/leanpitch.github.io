import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {SampleDataVideo} from "./SampleDataVideo"
export default function Videos() {
  const [Data, setData] = useState(SampleDataVideo)
  return (
    <div style={{margin:"1%",height:"98%",overflow:"hidden"}}>
      <Grid container spacing={2}>
        {Data.map(({id,src})=>(
            <Grid xs={4} md={3} key={id} style={{width:"244px"}}  >
            <img src={src} alt="" style = {{width:"100%" ,borderRadius:"5px"}} />
          </Grid>
        ))}
      </Grid>
      </div>
    
  );
}
