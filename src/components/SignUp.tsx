import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hideSignUp, showSignIn } from '../store/actions/appActions'
import { registerUser, sagaRegister } from '../store/actions/authActions'
import { RootState } from '../interface'
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(5, 0, 3),
  },
}))

export const SignUp: React.FC = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const user = useSelector((state: RootState) => state.auth.user)

  const [disabledSubmit, setDisabledSubmit] = React.useState(false)

  React.useEffect(() => {
    if (
      (user.message && user.status === 'success') ||
      (user.message && user.status === 'warning')
    ) {
      setTimeout(() => {
        dispatch(hideSignUp())
        dispatch(sagaRegister({ ...user, message: '', status: '' }))
        setDisabledSubmit(false)
      }, 2500)
    } else if (user.message && user.status === 'error') {
      setDisabledSubmit(false)
    }
  }, [user, disabledSubmit, dispatch])

  const handleSubmitForm = (formObj: Record<string, any>) => {
    setDisabledSubmit(true)
    dispatch(
      registerUser(
        formObj.firstName,
        formObj.lastName,
        formObj.email,
        formObj.password
      )
    )
  }

  const handleShowSignIn = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation()
    event.preventDefault()
    dispatch(hideSignUp())
    dispatch(showSignIn())
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
          Регистрация
        </Typography>
        {user.message && user.status === 'success' ? (
          <Typography component="h6" variant="h6" style={{ color: 'green' }}>
            {user.message}
          </Typography>
        ) : (
          ''
        )}
        {user.message && user.status === 'warning' ? (
          <Typography
            component="h6"
            variant="h6"
            style={{ color: 'rgb(35 143 191)' }}
          >
            {user.message}
          </Typography>
        ) : (
          ''
        )}
        {user.message && user.status === 'error' ? (
          <Typography
            component="h6"
            variant="h6"
            style={{ color: 'rgb(245 0 87)' }}
          >
            {user.message}
          </Typography>
        ) : (
          ''
        )}
        <Form
          onSubmit={(formObj) => {
            handleSubmitForm(formObj)
          }}
        >
          {({ handleSubmit }) => (
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <CustomTextInput
                    name="firstName"
                    label="Имя"
                    helperText="Введите имя"
                    autoFocus={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextInput
                    name="lastName"
                    label="Фамилия"
                    helperText="Введите фамилию"
                    autoFocus={false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextInput
                    name="email"
                    label="Email адрес"
                    helperText="Введите Email адрес"
                    autoFocus={false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomPasswordInput
                    name="password"
                    label="Пароль"
                    helperText="Введите пароль"
                    autoFocus={false}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={disabledSubmit}
              >
                Зарегистрировать
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <div style={{ marginRight: '12px' }}>
                    <Link to="" onClick={handleShowSignIn}>
                      {'Уже есть аккаунт? Войти'}
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
