import React from 'react'
import './index.css'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import LinkPage from './components/LinkPage'

function App() {
  return (
   <Switch>
     <Route path={process.env.PUBLIC_URL + '/'} exact component={Main} />
     <Route path={process.env.PUBLIC_URL + '/main'} component={Main} />
     <Route path={process.env.PUBLIC_URL + '/:link'} component={LinkPage} />
   </Switch>
  )
}

export default App
