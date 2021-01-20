import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route>
          <>
            <CssBaseline />
            <Container maxWidth="lg">
              <Header title="Давай меняться" sections={sections} />
              <Route path="/" component={Home} exact />
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