import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


function NewsCard({ title, content, link,imageUrl }) {
function wordCutter(str, size) {
  const a = str.split(" ");
  let b = "";
  let m = 0;

  for (const word of a) {
    if (m >= size) break;  
    if (m > 0) b += " ";   
    b += word;
    m++;
  }

  return b+"...";
}
  
  return (
    <Card sx={{ maxWidth: 350, backgroundColor: 'rgba(25,25,25,0.6)' ,maxHeight:450,minWidth:200}}>
      <CardActionArea href={link}>
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgba(158, 255, 0,0.7)' }}>
            {wordCutter(title,10)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsCard