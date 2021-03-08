import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { showSignIn } from '../store/actions/appActions'
import { logoutUser } from '../store/actions/authActions'
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
import Avatar from '@material-ui/core/Avatar'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import { deepPurple } from '@material-ui/core/colors'
import FullWidthTabs from '../components/FullWidthTabs'

const useStyles = makeStyles((theme: Theme) => ({
  topbar: {
    backgroundColor: '#fff',
    maxWidth: '1232px',
    right: '24px',
    left: '24px',
    width: 'auto',
    margin: '0 auto',
    ['@media (max-width:1024px)']: {
      display: 'none',
    },
  },
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
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(3),
    height: theme.spacing(3),
    display: 'inline-flex',
    top: '3px',
    marginLeft: '12px',
  },
  toolbarUserName: {
    color: 'rgba(0, 0, 0, 0.87)',
    display: 'inline-block',
    top: '10px',
    position: 'relative',
    marginRight: '15px',
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
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
  //favorite: number[]
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

const Header: React.FC = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const dispatch = useDispatch()

  const favorite = useSelector((state: RootState) => state.favorite.favorite)
  const user = useSelector((state: RootState) => state.auth.user)
  const { auth: userAuth, data: userData } = { ...user }

  const handleShow = () => dispatch(showSignIn())

  const handleBack = () => {
    history.goBack()
  }

  const handleLogout = () => dispatch(logoutUser(userData.id, userData.token))

  return (
    <HideOnScroll {...props}>
      <AppBar className={classes.topbar}>
        <Toolbar className={classes.toolbar}>
          <Grid item xs={12} sm={6} md={4}>
            <Button size="small" onClick={handleBack}>
              Назад
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={4} className={classes.lastGrid}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            {userAuth ? (
              <>
                <Avatar className={classes.avatar}></Avatar>
                <Typography noWrap className={classes.toolbarUserName}>
                  {userData.first_name}&nbsp;
                  {userData.last_name}
                </Typography>
              </>
            ) : (
              ''
            )}
            <IconButton aria-label="cart" style={{ marginRight: '24px' }}>
              <StyledBadge badgeContent={favorite.length} color="secondary">
                <FavoriteIcon style={{ color: 'red' }} />
              </StyledBadge>
            </IconButton>
            {userAuth ? (
              <Button variant="outlined" size="small" onClick={handleLogout}>
                Выход
              </Button>
            ) : (
              <Button variant="outlined" size="small" onClick={handleShow}>
                Вход
              </Button>
            )}
          </Grid>
        </Toolbar>
        <FullWidthTabs />
      </AppBar>
    </HideOnScroll>
  )
}

export default Header
