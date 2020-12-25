import types from './actionTypes'

export interface Actions {
  type: typeof types.ADD_TODO | typeof types.DELETE_TODO
  payload: {
    id: number,
    content?: string
  }
}

let nextTodoId = 0

export const addTodo = (content: string): Actions => ({
  type: types.ADD_TODO,
  payload: { 
    id: ++nextTodoId,
    content
  }
})

export const deleteTodo = (id: number): Actions => ({
  type: types.DELETE_TODO,
  payload: { id }
})