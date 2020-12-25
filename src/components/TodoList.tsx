import React, { useContext } from 'react'
import TodoContext from '../modules/contexts/todoContext'
import { deleteTodo } from '../modules/actions/todos'

const TodoList: React.FC = () => {
  const { todos, dispatch } = useContext(TodoContext)
  return (
    <ul>
      {
        todos.map(({ id, content }) => (
          <li key={id}>
            {content}
            <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList