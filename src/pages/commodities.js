import Grid from '@mui/joy/Grid';
import CommoditiesCard from './commoditiescard';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/joy';
import { Box } from '@mui/material';
 const API_KEY = process.env.REACT_APP_API_KEY;
export default function Commodities() {
const [top,setTop]=useState([])
  async function getData() {
    try {
      const response = await fetch("https://stock.indianapi.in/commodities", {
        method: "GET",
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
setTop(data);


    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
<>
    <Typography
  level="h1"
  color="neutral"
  sx={{
    fontSize: '2rem',
    fontWeight: 'bold',
    mb: 2, // margin bottom
    textAlign: 'center',
  color: '#9EFF00',
    paddingTop:10,
  }}
  alignSelf={'flex-start'}
>Commodities</Typography>
<Grid
   
     container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ flexGrow: 1 ,display:'flex',justifyContent:'space-around'}}
    >
{top.slice(0,6).map((item,index)=>(
    
       <CommoditiesCard key={index} company={item.product} price={item.buy_price} change={item.change} />
    
    ))}</Grid>
</>
  );
}
