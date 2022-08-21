import React from 'react'
import { createGlobalState } from 'react-use'
import { Todo } from '../App'
//https://github.com/xnimorz/use-debounce



const GlobalState = () => {
  const useGlobalValue = createGlobalState<Todo[]>([])
  const [todos, setTodos] = useGlobalValue()

  return (
    <div>GlobalState</div>
  )
}

export { GlobalState }