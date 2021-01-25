import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import { useSelector, useDispatch } from 'react-redux'
import { hideSignIn } from '../store/actions/appActions'
import { RootState } from '../interface'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { SignIn } from '../pages/SignIn'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  })
)

const SignInPopUp: React.FC = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const open = useSelector((state: RootState) => state.app.signInPopUp)

  const handleClose = () => dispatch(hideSignIn())

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <SignIn />
      </Backdrop>
    </div>
  )
}

export default SignInPopUp
