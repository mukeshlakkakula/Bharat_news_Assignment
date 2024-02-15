import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import ReactContext from './ReactContext/index'

import Header from './components/Header'

import ProfilePage from './components/ProfilePage'
import HomePage from './components/HomePage'
import Settings from './components/Settings'

import './App.css'

class App extends Component {
  state = {lightTheme: true}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  render() {
    const {lightTheme} = this.state

    return (
      <ReactContext.Provider
        value={{
          lightTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/Settings" component={Settings} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
