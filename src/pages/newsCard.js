import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


function NewsCard({title,content}) {
  return (
    <Card sx={{ maxWidth: 345,backgroundColor:'rgba(25,25,25,0.6)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/premium-psd/black-bull-charging-forward-front-green-stock-market-chart_514761-15005.jpg"
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'#9EFF00'}}>
          {title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#FFF' }}>
         {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsCard