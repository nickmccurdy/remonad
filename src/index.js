import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Remonad from './Remonad'

render(
  <Remonad initialState={{ todos: [], visibilityFilter: 'SHOW_ALL' }}>
    <App />
  </Remonad>,
  document.getElementById('root')
)
