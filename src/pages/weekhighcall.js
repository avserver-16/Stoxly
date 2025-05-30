import Grid from '@mui/joy/Grid';
import Weekhigh from './weekhigh';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/joy';
 const API_KEY = process.env.REACT_APP_API_KEY;
export default function WeekhighCall() {
const [top,setTop]=useState([])
  async function getData() {
    try {
      const response = await fetch("https://stock.indianapi.in/fetch_52_week_high_low_data", {
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
setTop(data.BSE_52WeekHighLow.high52Week);


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
    color: '#FFF', // or any color that gives contrast
    paddingTop:10,
  }}
  alignSelf={'flex-start'}
>Top Gainers</Typography>
<Grid
   
     container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ flexGrow: 1 ,display:'flex',justifyContent:'space-around'}}
    >
{top.slice(0,6).map((item,index)=>(
    
       <Weekhigh key={index} company={item.company} price={item.price}/>
    
    ))}</Grid></>
  );
}
