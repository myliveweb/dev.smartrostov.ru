import React from 'react';
import Box from '@material-ui/core/Box';
import CardItem from '../components/CardItem';
import Grid from '@material-ui/core/Grid';
interface HomeProps {
  favoriteList: number[],
  setFavoriteList: (favoriteList: number[]) => void;
  cardList: {
    id: number,
    shop: string,
    name: string,
    date: string,
    photo: string,
    price: string,
    oldprice: string
  }[];
}

const Home: React.FC<HomeProps> = ({favoriteList, setFavoriteList, cardList}) => {

  const favState = { favoriteList: favoriteList, setFavoriteList: setFavoriteList }

  return (
    <Box my={4} style={{flexGrow: 1}}>
      <Grid container spacing={3}>
      {cardList.map((item, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <CardItem data={item} favState={favState} />
        </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;