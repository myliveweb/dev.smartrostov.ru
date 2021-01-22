import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Card from './pages/Card'
import { About } from './pages/About'
import { Info } from './pages/Info'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

const sections = [
  { title: 'Главная', url: '/' },
  { title: 'Категории', url: '/catalog' },
  { title: 'Собрать свою', url: '/create' },
  { title: 'Галлерея', url: '/gallery' },
  { title: 'Как это работает', url: '/info' },
  { title: 'О нас', url: '/about' },
];

function App() {

  const [cardList, setCardList] = React.useState([]);

  const offset: number = 0
  const limit: number = 8

  React.useEffect(() => {
    axios.get(`https://api.zapolskiy.moscow/v2/?action=card_list&offset=${offset}&limit=${limit}`)
      .then(res => {
        setCardList(() => res.data)
      })
  }, []);

  let init: number[] = []

  const fav = window.localStorage.getItem('favoriteList')

  if(fav)
    init = JSON.parse(fav)

  const [favoriteList, setFavoriteList] = React.useState(init);

  React.useEffect(() => {
    window.localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
  }, [favoriteList]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route>
          <>
            <CssBaseline />
            <Container maxWidth="lg">
              <Header title="Давай меняться" sections={sections} favoriteList={favoriteList} />
              <Route path="/" exact>
                <Home favoriteList={favoriteList} setFavoriteList={setFavoriteList} cardList={cardList} />
              </Route>
              <Route path="/card/:id" component={Card} />
              <Route path="/info" component={Info} />
              <Route path="/about" component={About} />
            </Container>
            <Footer />
          </>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;