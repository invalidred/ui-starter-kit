import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { defaultTheme, MuiThemeProvider } from 'purewealth-ui'

import store from './app/store'

const render = () => {
  const App = require('./app/App').default

  ReactDOM.render(
    <MuiThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}
