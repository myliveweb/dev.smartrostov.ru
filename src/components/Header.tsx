import React from 'react';
import { useHistory, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
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
}));

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 1,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }),
)(Badge);

interface HeaderProps {
    title: string,
    sections: {title: string, url: string}[],
    favoriteList: number[],
}

export const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const history = useHistory()
  
  const { sections, favoriteList } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
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
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={favoriteList.length} color="secondary">
            <FavoriteIcon style={{ color: 'red' }} />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={() => history.push('/signin')}>
          Вход
        </Button>
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

/*Header.propTypes = {
  title: PropTypes.string,
  sections: PropTypes.array
};*/