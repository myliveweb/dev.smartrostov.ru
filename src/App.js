import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import { Create } from './pages/Create'
import Card from './pages/Card'
import { About } from './pages/About'
import { Info } from './pages/Info'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import SignInPopUp from './components/SignInPopUp'
import SignUpPopUp from './components/SignUpPopUp'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route>
          <>
            <CssBaseline />
            <Container maxWidth="lg" style={{paddingTop: '110px'}}>
              <Header />
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/create" component={Create} />
              <Route path="/card/:id" component={Card} />
              <Route path="/info" component={Info} />
              <Route path="/about" component={About} />
            </Container>
            <Footer />
            <SignInPopUp />
            <SignUpPopUp />
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;