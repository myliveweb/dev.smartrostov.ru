import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Info } from './pages/Info'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Info', url: '/info' },
  { title: 'SignIn', url: '/signin' },
  { title: 'SignUp', url: '/signup' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
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
              <Header title="Мой питомец" sections={sections} />
              <Route path="/" component={Home} exact />
              <Route path="/info" component={Info} />
            </Container>
            <Footer />
          </>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;