import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'


import Loadable from 'react-loadable'

import Loader from './components/LayoutComponents/Loader'

const loadable = (loader:any) =>
  Loadable({
    loader,
    delay: false,
    loading: () => <Loader />,
  })

const routes = [
  // System Pages
  {
    path: '/user/login',
    component: 'pages/user/login',
    exact: true,
  }
]

class Router extends React.Component {
  render() {
    
    return (
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/dashboard/alpha" />} />
            {routes.map(route => (
              <Route
                path={route.path}
                key={route.path}
                exact={route.exact}
              />
            ))}
          </Switch>
     
    )
  }
}

export default Router
