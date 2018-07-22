import PropTypes from 'prop-types'
import React, { Component, createContext } from 'react'

export const Context = createContext()

export default class Remonad extends Component {
  static propTypes = {
    children: PropTypes.node,
    initialState: PropTypes.object
  }

  state = this.props.initialState

  render() {
    return (
      <Context.Provider
        value={{ state: this.state, setState: this.setState.bind(this) }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}
