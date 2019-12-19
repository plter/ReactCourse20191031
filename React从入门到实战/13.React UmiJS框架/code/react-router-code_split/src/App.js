import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import NoMatch from './components/Error';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'


const MenuLink = ({ children, to, exact }) => {
  return (
    <Route path={ to } exact={ exact } children={ ({ match }) => (
      <NavLink activeStyle={ match ? { color: 'green' } : {} } to={ to }>
        { match ? '>' : '' }{ children }
      </NavLink>
    )} />
  )
}

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  }
]

class DynamicImport extends Component {
  state = {
    component: null
  }

  // componentDidMount
  componentWillMount() {
    this.props.load()
      .then((mod) => this.setState({
        component: mod.default
      }))
  }

  render() {
    return this.props.children(this.state.component)
  }
}

const Profile = (props) => (
  <DynamicImport load={() => import('./components/Profile')}>
    {(Component) => Component === null 
      ? <h1>Loading...</h1>
      : <Component { ...props } />
    }
  </DynamicImport>
)

const About = (props) => (
  <DynamicImport load={() => import('./components/About')}>
    {(Component) => Component === null 
      ? <h1>Loading...</h1>
      : <Component { ...props } />
    }
  </DynamicImport>
)

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-intro">
            <ul>
              <li>
                <MenuLink exact={ true } to="/">
                  Home
                </MenuLink>
              </li>
              <li>
                <MenuLink exact={ true } to="/profile">
                  Profile
                </MenuLink>
              </li>
              <li>
                <MenuLink exact={ true } to="/about">
                  About
                </MenuLink>
              </li>
              <li>
                <NavLink
                  to="/error"
                  activeStyle={{
                    color: 'green'
                }}>
                  Error
                </NavLink>
              </li>
              
            </ul>
            <Switch>
              { routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  { ...route }
                />
              ))}
              <Route path="/about/new" component={ About } />
              <Route path="/home" component={ Home } />
              <Route path="/profile" component={ Profile } />
              <Route path="/about" component={ About } />
              <Route component={ NoMatch } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
