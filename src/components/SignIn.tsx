import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { hideSignIn, showSignUp } from '../store/actions/appActions'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: 'left',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const SignIn: React.FC = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const handleShowSignUp = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(hideSignIn())
    dispatch(showSignUp())
  }

  return (
    <Container component="main" maxWidth="xs" style={{ zIndex: 1300 }}>
      <CssBaseline />
      <div
        className={classes.paper}
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          event.stopPropagation()
        }
      >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email адрес"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Вход
          </Button>
          <Grid container style={{ justifyContent: 'space-around' }}>
            <Grid item sm={6}>
              <div style={{ textAlign: 'left', marginLeft: '12px' }}>
                <Link to="#">Забыли пароль?</Link>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div style={{ textAlign: 'right', marginRight: '12px' }}>
                <Link to="#" onClick={handleShowSignUp}>
                  {'Регистрация'}
                </Link>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
