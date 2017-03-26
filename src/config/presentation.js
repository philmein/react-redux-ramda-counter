import { Router } from 'presentation/Router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

export const configurePresentation = store => {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('content')
  )
}
