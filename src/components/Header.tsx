import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showSignIn } from '../store/actions/appActions'
import { RootState } from '../interface'
import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Badge from '@material-ui/core/Badge'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

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
}))

const StyledBadge = withStyles((theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 1,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  })
)(Badge)

const sections = [
  { title: 'Главная', url: '/' },
  { title: 'Категории', url: '/catalog' },
  { title: 'Собрать свою', url: '/create' },
  { title: 'Галлерея', url: '/gallery' },
  { title: 'Как это работает', url: '/info' },
  { title: 'О нас', url: '/about' },
]

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
  favorite: number[]
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Header: React.FC<Props> = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const dispatch = useDispatch()

  const favorite = useSelector((state: RootState) => state.favorite.favorite)

  const handleShow = () => dispatch(showSignIn())

  return (
    <HideOnScroll {...props}>
      <AppBar
        style={{ backgroundColor: '#fff', maxWidth: '1232px', right: 'auto' }}
      >
        <Toolbar className={classes.toolbar}>
          <Grid item xs={12} sm={6} md={3}>
            <Button size="small" onClick={() => history.goBack()}>
              Назад
            </Button>
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

            <Button variant="outlined" size="small" onClick={handleShow}>
              Вход
            </Button>
          </Grid>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
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
      </AppBar>
    </HideOnScroll>
  )
}

export default Header
