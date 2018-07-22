import React from 'react'
import TodoList from '../components/TodoList'
import { Connect } from '../Remonad'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

export default () => (
  <Connect>
    {({ state, setState }) => (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        toggleTodo={id =>
          setState({
            todos: state.todos.map(
              todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          })
        }
      />
    )}
  </Connect>
)
