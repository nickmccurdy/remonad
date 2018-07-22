import PropTypes from 'prop-types'
import React, { Component, createContext } from 'react'

const Context = createContext()

export const Connect = Context.Consumer

export class Store extends Component {
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
