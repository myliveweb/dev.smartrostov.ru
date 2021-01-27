import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { hideSignIn, showSignUp } from '../store/actions/appActions'
import { Form } from 'react-final-form'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CustomTextInput from './customTextInput'
import CustomPasswordInput from './customPasswordInput'
import CssBaseline from '@material-ui/core/CssBaseline'
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
  margin: {
    width: '100%',
    marginTop: theme.spacing(2),
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
    margin: theme.spacing(5, 0, 3),
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
        <Form
          onSubmit={(formObj) => {
            console.log(formObj)
          }}
        >
          {({ handleSubmit, submitting }) => (
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <CustomTextInput
                name="email"
                label="Email адрес"
                helperText="Введите Email адрес"
                autoFocus={true}
              />
              <CustomPasswordInput
                name="password"
                label="Пароль"
                helperText="Введите пароль"
                autoFocus={false}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={submitting}
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
          )}
        </Form>
      </div>
    </Container>
  )
}
