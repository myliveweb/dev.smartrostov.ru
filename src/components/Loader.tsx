import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loader: React.FC = () => {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 480,
        '& > * + *': {
          marginLeft: theme.spacing(2),
        }
      },
    }),
  );

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}