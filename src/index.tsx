import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { defaultTheme, MuiThemeProvider } from 'purewealth-ui'
import { IntlProvider } from 'react-intl'
import messagesFr from './translations/fr.json'
import messagesEn from './translations/en.json'
import { getStore } from './app/store'

const messages: Record<string, Record<string, string>> = {
  en: messagesEn,
  fr: messagesFr,
}

const language = navigator.language.split(/[-_]/)[0]

const render = () => {
  const App = require('./app/App').default

  ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
      <MuiThemeProvider theme={defaultTheme}>
        <Provider store={getStore()}>
          <App />
        </Provider>
      </MuiThemeProvider>
    </IntlProvider>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}
