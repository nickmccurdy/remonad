import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Store } from './Remonad'

render(
  <Store initialState={{ todos: [], visibilityFilter: 'SHOW_ALL' }}>
    <App />
  </Store>,
  document.getElementById('root')
)
