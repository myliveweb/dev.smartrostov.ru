import React from 'react'
import getData from '../store/saga/sendRequest'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import parse from 'html-react-parser'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  paper: {
    width: '100%',
    display: 'flex',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
    //paddingTop: '56.25%', // 16:9
  },
  table: {
    minWidth: 320,
    marginTop: 15,
  },
})

const init = {
  id: 0,
  photo: '',
  name: '',
  info_clean: '',
  info: [{ name: '', description: '' }],
}
interface CardProps {
  match: {
    params: {
      id: string
    }
  }
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    action: string
    id: number
  }
}

const Card: React.FC<CardProps> = (props) => {
  const id = parseInt(props.match.params.id, 10)

  const [cardItem, setCardItem] = React.useState(init)

  React.useEffect(() => {
    const data = {
      action: 'card_item',
      id: id,
    }
    const dataList = getData(data)
    dataList.then((res) => setCardItem(res))
  }, [id])

  const classes = useStyles()

  const fullPhoto = `/asset/img/basemor/${cardItem.photo}`

  return (
    <Box my={4} style={{ flexGrow: 1 }}>
      <Grid container>
        {cardItem.id > 0 && (
          <Paper className={classes.paper} elevation={1}>
            <Grid item xs={12} sm={6} md={4} style={{ padding: '15px' }}>
              <CardMedia
                className={classes.media}
                image={fullPhoto}
                title={cardItem.name}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8} style={{ padding: '15px' }}>
              <h2>{cardItem.name}</h2>
              {parse(cardItem.info_clean)}
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableBody>
                  {cardItem.info.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Paper>
        )}
      </Grid>
    </Box>
  )
}

export default Card
