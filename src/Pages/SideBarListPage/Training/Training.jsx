import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {SampleDataTraining} from "./SampleDataTraining"

export default function TrainingPage() {
  const [Data, setData] = useState(SampleDataTraining)

  return (
    <div style={{margin:"1%",height:"98%",overflow:"hidden"}}>
      <Grid container spacing={2}>
        {Data.map(({id,src})=>(
            <Grid xs={4} md={3} key={id} style={{width:"230px",}}  >
            <img src={src} alt="" style = {{width:"100%" ,borderRadius:"10px"}} />
          </Grid>
        ))}
      </Grid>
      </div>
  )
}
