import React from 'react';
import { useHistory, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

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

interface HeaderProps {
    title: string,
    sections: {title: string, url: string}[]
}

export const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const history = useHistory()
  
  const { sections, title } = props;

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