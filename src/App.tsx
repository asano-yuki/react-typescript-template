import React, { useReducer } from 'react'
import TodoContext from './modules/contexts/todoContext'
import reducer from './modules/reducers/todos'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <TodoContext.Provider value={{ todos: state, dispatch }}>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App