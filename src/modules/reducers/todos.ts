import types from '../actions/actionTypes'
import { Actions } from '../actions/todos'

export type State = Actions['payload'][]

const Todos = (state: State, action: Actions): State => {
  const { type, payload } = action
  switch (type) {
    case types.ADD_TODO:
      return [...state, payload]
    case types.DELETE_TODO:
      const id = payload.id
      return state.filter(item => item.id !== id)
    default:
      return state
  }
}

export default Todos