import React from 'react'
import './index.css'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import LinkPage from './components/LinkPage'

function App() {
  console.log(process.env.PUBLIC_URL);
  
  return (
   <Switch>
     {/* <Route path={process.env.PUBLIC_URL + '/main'} exact component={Main} /> */}
     <Route path={process.env.PUBLIC_URL + '/'} exact component={Main} />
     <Route path={process.env.PUBLIC_URL + '/:link'} component={LinkPage} />
   </Switch>
  )
}

export default App
