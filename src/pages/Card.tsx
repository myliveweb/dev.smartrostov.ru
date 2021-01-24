import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  paper: {
    width: '100%',
    display: 'flex',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
    //paddingTop: '56.25%', // 16:9
  },
});

const init = {
  id: 0,
  photo: '',
  name: '',
}
interface CardProps {
  match: {params: {
    id: string
  }}
}

const Card: React.FC<CardProps> = (props) => {

  const id = parseInt(props.match.params.id, 10)

  const [cardItem, setCardItem] = React.useState(init);

  React.useEffect(() => {
    axios.get(`https://api.zapolskiy.moscow/v2/?action=card_item&id=${id}`)
      .then(res => {
        setCardItem(() => res.data)
      })
  }, []);

  const classes = useStyles();

  return (
    <Box my={4} style={{flexGrow: 1}}>
      <Grid container>
      {cardItem.id > 0 &&
        <Paper className={classes.paper} elevation={1} >
          <Grid item xs={12} sm={6} md={4} style={{padding: '15px'}}>
            <CardMedia
              className={classes.media}
              image={cardItem.photo}
              title={cardItem.name}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} style={{padding: '15px'}}>
            <h2>
              {cardItem.name}
            </h2>
          </Grid>
        </Paper>
      }
      </Grid>
    </Box>
  )
}

export default Card;