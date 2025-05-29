import { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import { Box, Grid } from "@mui/material";

export default function News() {
  const [newsData, setNewsData] = useState([]);

  const API_KEY = 'sk-live-kjKOglAlDH8DP7HHALkAcZcgFItam4XslC6XxS86';

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

  return (
    <Box sx={{ flexGrow: 2, display: 'flex', alignItems: 'center', backgroundColor: 'black', paddingX: 5, marginTop: -5, zIndex: 15 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'center'}>
       {newsData.slice(0,6).map((item, index) => (
          <Grid key={index} item xs={2} sm={4} md={4}>
            <NewsCard title={item.title} content={item.summary || item.content || "No summary"} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
