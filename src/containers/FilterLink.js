import PropTypes from 'prop-types'
import React from 'react'
import Link from '../components/Link'
import { Connect } from '../Remonad'

const FilterLink = ({ children, filter }) => (
  <Connect>
    {({ state, setState }) => (
      <Link
        active={filter === state.visibilityFilter}
        children={children}
        onClick={() => setState({ visibilityFilter: filter })}
      />
    )}
  </Connect>
)

FilterLink.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'])
    .isRequired
}

export default FilterLink
