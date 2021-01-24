import React from 'react';
import { useHistory, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  lastGrid: {
    textAlign: 'right',
  },
}));

const StyledBadge = withStyles((theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 1,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }),
)(Badge);

const sections = [
  { title: 'Главная', url: '/' },
  { title: 'Категории', url: '/catalog' },
  { title: 'Собрать свою', url: '/create' },
  { title: 'Галлерея', url: '/gallery' },
  { title: 'Как это работает', url: '/info' },
  { title: 'О нас', url: '/about' },
];

interface HeaderProps {
  favorite: number[]
}

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  const history = useHistory()

  interface RootState {
    favorite: {
      favorite: number[]
    },
    card: {
      cardList: {}[]
    },
    app: {
      loading: boolean
    }
  }

  const selectFavorite = (state: RootState) => state.favorite.favorite
  const favorite = useSelector(selectFavorite)

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Grid item xs={12} sm={6} md={3}>
          <Button size="small" onClick={() => history.goBack()}>Назад</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            <img src="/asset/img/1.png" alt="" />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.lastGrid}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={favorite.length} color="secondary">
              <FavoriteIcon style={{ color: 'red' }} />
            </StyledBadge>
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small" onClick={() => history.push('/signin')}>
            Вход
          </Button>
        </Grid>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <NavLink
          color="inherit"
          key={section.title}
          to={section.url}
          className={classes.toolbarLink}
        >
            {section.title}
          </NavLink>
        ))}
      </Toolbar>
    </>
  );
}

export default Header;