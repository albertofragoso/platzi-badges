import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Badges from './pages/Badges'
import BadgeNew from './pages/BadgeNew'

function App() {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App