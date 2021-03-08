import { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import CardItem from '../components/CardItem'
import Grid from '@material-ui/core/Grid'
import { Loader } from '../components/Loader'
import axios from 'axios'

const Home = () => {

  const [cardList, setCardList] = useState([])
  const [offset, setOffset] = useState(0)
  const [fetching, setFetching] = useState(true)
  const limit = 32

  useEffect(() => {
    if(fetching) {
      const data = {
        action: 'card_list',
        offset,
        limit
      }
      axios.post(`https://api.zapolskiy.moscow/v2/index.php`, data)
        .then(res => {
          setCardList(prev => [...prev, ...res.data])
          setOffset(prev => prev + limit)
        })
        .finally(() => setFetching(false))
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1000) {
      setFetching(true)
    }
  }

  console.log('Render Home')

  if (!cardList || !cardList.length) {
    return <Loader />
  }

  return (
    <>
    <Box my={4} style={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {cardList.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <CardItem data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}

export default Home
