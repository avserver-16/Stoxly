import { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/joy";
export default function News() {
  const [newsData, setNewsData] = useState([]);

 const API_KEY = process.env.REACT_APP_API_KEY;


  async function getData() {
    try {
      const response = await fetch("https://stock.indianapi.in/news", {
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

      // store entire array in state
      setNewsData(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (<>
    <Typography
  level="h1"
  color="neutral"
  sx={{
    fontSize: '2rem',
    fontWeight: 'bold',
    mb: 2, // margin bottom
    textAlign: 'center',
    color: '#9EFF00',
    my:10
  }}
  alignSelf={'flex-start'}
>News</Typography>
    <Box sx={{ flexGrow: 1, display: 'flex', backgroundColor: 'black', zIndex: 15 ,justifyContent:'space-around',paddingBottom:10}}>
      <Grid container spacing={{ xs: 3, md: 20 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'center'}>
       {newsData.slice(0,3).map((item, index) => (
          <Grid key={index} item xs={2} sm={4} md={4}>
            <NewsCard title={item.title} content={item.summary || item.content || "No summary"} link={item.url} imageUrl={item.image_url}/>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
}
