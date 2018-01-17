import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Loading from './components/Loading'
import Routes from './routes'
import Navigation from './components/Navigation'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import muiTheme from './assets/styles/theme'
import './App.css'

class App extends Component {
  // static childContextTypes = {
  //   muiTheme: PropTypes.object.isRequired,
  // }

  // getChildContext() {
  //   return { muiTheme }
  // }

  render() {
    return (
      <div className="App">
        <Loading />
        <Navigation />
        <Routes />
      </div>
    )
  }
}

export default App
