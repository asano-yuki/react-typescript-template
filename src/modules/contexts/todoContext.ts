import { createContext } from 'react'
import { State } from '../reducers/todos'
import { Actions } from '../actions/todos'

interface ContextTypes {
  todos: State
  dispatch: (value: Actions) => void
}

export default createContext<ContextTypes>({
  todos: [],
  dispatch: () => {}
})