import React from 'react';
import Box from '@material-ui/core/Box';
import CardItem from '../components/CardItem';
import Grid from '@material-ui/core/Grid';

const Home = ({cardList}) => {

  return (
    <Box my={4} style={{flexGrow: 1}}>
      <Grid container spacing={3}>
      {cardList.map((item, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <CardItem data={item} />
        </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;