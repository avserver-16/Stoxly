import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';

import Typography from '@mui/joy/Typography';


export default function CommoditiesCard({ company, price, change }) {
  return (
    <Card variant="solid" invertedColors sx={{ mx: 6, my: 5, width: 300, backgroundColor: 'rgba(36, 36, 36,0.5)' }}>
      <CardContent orientation="horizontal">
        <CardContent>
          <Typography level="h4">{company}</Typography>
          <Typography level="body-md" color='success'>₹{price} <Typography sx={{ color: change > 0 ? 'green' : 'red' }}>({change}%)</Typography></Typography>

        </CardContent>
      </CardContent>
      <CardActions>
        <Button variant="soft" size="sm" sx={{ backgroundColor: 'rgba(158, 255, 0,0.7)', borderRadius: 16 }}>
          Add to Watchlist
        </Button>

      </CardActions>
    </Card>
  );
}
