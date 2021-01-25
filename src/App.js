import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Card from './pages/Card'
import { About } from './pages/About'
import { Info } from './pages/Info'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import SignInPopUp from './components/SignInPopUp'

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
              <Route path="/card/:id" component={Card} />
              <Route path="/info" component={Info} />
              <Route path="/about" component={About} />
            </Container>
            <Footer />
            <SignInPopUp />
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;