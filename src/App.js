import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoadErrors from './components/LoadErrors'
import Loading from './components/Loading'
import Routes from './routes'
import Navigation from './components/Navigation'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <Loading />
        <LoadErrors />
        <Navigation />
        <Routes />
      </div>
    </MuiThemeProvider>
    )
  }
}

export default App
