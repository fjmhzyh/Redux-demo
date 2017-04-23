import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterLink from '../containers/FilterLink'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <FilterLink />
  </div>
)

export default App
