import React from 'react';
import Box from '@material-ui/core/Box';
import CardItem from '../components/CardItem';
import Grid from '@material-ui/core/Grid';

const dataItems = [
  { id: 1, shop: 'vliga', name: 'Мороженое Минское Пломбир шоколадный ж15% 400г Россия', date: 'с 8 по 20 января', photo: '/asset/img/1.webp', price: '159,90 ₽', oldPrice: '209,90 ₽' },
  { id: 2, shop: 'mfamily', name: 'Мороженное Магнат миндаль, 0,073кг', date: 'с 20 по 26 января', photo: '/asset/img/2.webp', price: '44,90 ₽', oldPrice: '89,80 ₽' },
  { id: 3, shop: 'nkvartal', name: 'Мороженое двухслойное Золотая ириска в карамельной глазури эскимо (сырок) 15% 80 гр', date: 'с 18 по 31 января', photo: '/asset/img/3.webp', price: '36,90 ₽', oldPrice: '64,90 ₽' },
  { id: 4, shop: 'dixi', name: 'Мороженое КОРНЕТТО ЮНИКОРН рожок, 73 г', date: 'с 14 по 31 января', photo: '/asset/img/4.webp', price: '49,99 ₽', oldPrice: '79,99 ₽' },
]

const Home: React.FC = () => {

  return (
    <Box my={4} style={{flexGrow: 1}}>
      <Grid container spacing={3}>
      {dataItems.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <CardItem data={item} />
        </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;