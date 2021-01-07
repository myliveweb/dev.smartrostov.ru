import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { LeftMenu } from './components/LeftMenu'
import { Home } from './pages/Home'
import { Info } from './pages/Info'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid mimin-wrapper">
      <LeftMenu />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/info" component={Info} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;