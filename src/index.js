import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ConnectedRouter as Router } from 'react-router-redux'
// import injectTapEventPlugin from 'react-tap-event-plugin'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
// injectTapEventPlugin()
