import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '100%', // 16:9
      //paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    favoriteActive: {
      color: red[500],
    },
  }),
);

/*function useLocalStorageState(key: string, defaultValue: [] = []) {

  let init: [] = defaultValue

  const fav = window.localStorage.getItem(key)

  if(fav)
    init = JSON.parse(fav)

  const [favoriteList, setFavoriteList] = React.useState(
    () => init
  );

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(favoriteList));
  }, [favoriteList, key]);

  return [favoriteList, setFavoriteList];
}*/

interface CardItemProps {
  data: {
    id: number,
    shop: string,
    name: string,
    date: string,
    photo: string,
    price: string,
    oldPrice: string
  },
  favState: {
    favoriteList: number[],
    setFavoriteList: (favoriteList: number[]) => void;
  }
}

const CardItem: React.FC<CardItemProps> = (props) => {

  const {id, name, date, photo, price, oldPrice} = { ...props.data }
  const {favoriteList, setFavoriteList} = { ...props.favState }
  
  const classes = useStyles()
  const history = useHistory()

  const [shadow, setShadow] = React.useState(1);

  const handleMouseEnter = () => {
    setShadow(5)
  };

  const handleMouseLeave = () => {
    setShadow(1)
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, idFavorite: number) => {
    event.stopPropagation()

    if(!favoriteList.includes(idFavorite)) {
      setFavoriteList([...favoriteList, idFavorite]);
    } else {
      setFavoriteList(favoriteList.filter(item => item !== idFavorite));
    }
  };

  return (
    <Card
      className={classes.root}
      style={{ height: '100%', cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      elevation={shadow}
      onClick={() => history.push(`/card/${id}`)}
      >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <div className="card-header">
            {name}
          </div>
        }
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={photo}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="span">
        {price}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="span" style={{marginLeft: '15px', textDecoration: 'line-through'}}>
        {oldPrice}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={favoriteList.includes(id) ? classes.favoriteActive : ''} aria-label="add to favorites" onClick={event => handleClick(event, id)}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardItem;