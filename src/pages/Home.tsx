import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../interface'
import { fetchCards } from '../store/actions/cardActions'
import Box from '@material-ui/core/Box';
import CardItem from '../components/CardItem';
import Grid from '@material-ui/core/Grid';
import { Loader } from '../components/Loader'

const Home: React.FC = () => {

  const dispatch = useDispatch()

  const cardList = useSelector((state: RootState) => state.card.cardList)

  const loading = useSelector((state: RootState) => state.app.loading)

  let offset = 0;
  let limit = 8;

  React.useEffect(() => {
    dispatch(fetchCards(offset, limit))
  }, [offset, limit]);

  if(!cardList || !cardList.length) {
    return <Loader />
  }

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