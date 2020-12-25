import React, { useState, useContext } from 'react'
import TodoContext from '../modules/contexts/todoContext'
import { addTodo } from '../modules/actions/todos'

const AddTodo: React.FC = () => {
  const [input, setInput] = useState('')
  const { dispatch } = useContext(TodoContext)
  return (
    <div>
      <input type='text' value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => dispatch(addTodo(input))}>Add</button>
    </div>
  )
}

export default AddTodo