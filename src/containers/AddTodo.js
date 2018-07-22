import React from 'react'
import { Connect } from '../Remonad'

export default () => {
  let input
  let nextTodoId = 0

  return (
    <Connect>
      {({ state, setState }) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            setState({
              todos: [
                ...state,
                {
                  id: nextTodoId++,
                  text: input.value,
                  completed: false
                }
              ]
            })
            input.value = ''
          }}
        >
          <input ref={node => (input = node)} />
          <button type="submit">Add Todo</button>
        </form>
      )}
    </Connect>
  )
}
