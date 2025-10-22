import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RecipeReviewCard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 6, // how many cards you want
              page: 1,
            },
          }
        );
        setCoins(res.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem',
        background: '#0d1117', // dark trading theme
      }}
    >
      {coins.map((coin) => (
        <Card
          key={coin.id}
          sx={{
            width: 280,
            backgroundColor: '#161b22',
            color: '#fff',
            border: '1px solid #222',
            borderRadius: '10px',
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={coin.image}
                alt={coin.name}
                sx={{ width: 40, height: 40 }}
              />
            }
            title={coin.name}
            subheader={coin.symbol.toUpperCase()}
            subheaderTypographyProps={{ color: '#aaa' }}
          />

          <CardMedia
            component="img"
            height="140"
            image={coin.image}
            alt={coin.name}
            sx={{ objectFit: 'contain', padding: '10px' }}
          />

          <CardContent>
            <Typography variant="body1">
              💰 Price: ${coin.current_price.toLocaleString()}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color:
                  coin.price_change_percentage_24h >= 0 ? 'lime' : 'red',
                fontWeight: 'bold',
              }}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </Typography>
          </CardContent>

          <IconButton
            aria-label="add to favorites"
            sx={{ color: '#f44336', marginLeft: '10px' }}
          >
            <FavoriteIcon />
          </IconButton>
        </Card>
      ))}
    </div>
  );
};

export default RecipeReviewCard;