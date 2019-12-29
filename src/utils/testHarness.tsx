import React from 'react'
import { IntlProvider } from 'react-intl'
import { defaultTheme, MuiThemeProvider } from 'purewealth-ui'
import { Provider } from 'react-redux'
import translations from '../translations/en.json'
import { getStore } from '../app/store'

export default (component: JSX.Element) => (
  <IntlProvider locale="en" messages={translations}>
    <MuiThemeProvider theme={defaultTheme}>
      <Provider store={getStore()}>{component}</Provider>
    </MuiThemeProvider>
  </IntlProvider>
)
