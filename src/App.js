import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import { Catalog } from './pages/Catalog'
import { Create } from './pages/Create'
import { Gallery } from './pages/Gallery'
import { Info } from './pages/Info'
import { About } from './pages/About'
import Card from './pages/Card'
import SignInPopUp from './components/SignInPopUp'
import SignUpPopUp from './components/SignUpPopUp'

function App() {

  console.log('Render App')

  return (
    <BrowserRouter>
      <Switch>
        <>
          <CssBaseline />
          <Container maxWidth="lg" style={{paddingTop: '110px'}}>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/create" component={Create} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/card/:id" component={Card} />
            <Route path="/info" component={Info} />
            <Route path="/about" component={About} />
          </Container>
          <Footer />
          <SignInPopUp />
          <SignUpPopUp />
        </>
      </Switch>
    </BrowserRouter>
  )
}

export default App;