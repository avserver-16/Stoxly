import NewsCard from "./newsCard";
import { Box, Grid } from "@mui/material";
export default function News() {
const a = [
  {
    index: 1,
    title: 'USA',
    content: 'The United States of America is known for its diverse culture and technological innovation.'
  },
  {
    index: 2,
    title: 'France',
    content: 'France is famous for its rich history, art, and world-class cuisine.'
  },
  {
    index: 3,
    title: 'Brazil',
    content: 'Brazil is renowned for its vibrant festivals, beautiful beaches, and the Amazon rainforest.'
  },
  {
    index: 4,
    title: 'Japan',
    content: 'Japan blends ancient traditions with cutting-edge technology and is famous for its cherry blossoms.'
  }
];


    return (<Box sx={{ flexGrow: 2, display: 'flex', alignItems: 'center', backgroundColor: 'black', paddingX: 5, marginTop: -5, zIndex: 15 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'center'}>
            {a.map(({index,title,content}) => (
                <Grid key={index} item xs={2} sm={4} md={4}>
                    <NewsCard title={title} content={content} />
                </Grid>
            ))}
        </Grid></Box>)
}
