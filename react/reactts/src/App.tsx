import React, { useCallback, useEffect, useState, useReducer, useRef } from "react";
import Heading from "./components/Heading";
import { Box } from "./components/Box";
import "./App.css";
import { Incrementor, useNumber } from "./components/Incrementor";
import { TodosProvider, useTodos, useAddTodo, useRemoveTodo } from './components/CusotmHooks'
import create from 'zustand'

import { Provider, useSelector, useDispatch } from 'react-redux'
import strore, { selectTodos, addTodo, removeTodo } from './store'

interface Payload {
  text: string
}
export interface Todo {
  id: number
  done: boolean
  text: string
}

type ActionType = |
{ type: 'ADD', text: string } |
{ type: 'REMOVE', id: number }

// GENERIC 
function UL<T>({ items, render, itemClick }:
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement> &
  {
    items: T[]
    render: (item: T) => React.ReactNode
    itemClick: (item: T) => void
  }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}
          onClick={() => itemClick(item)}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item)
  }, [])

  const [payload, setPayload] = useState<Payload | null>(null)

  useEffect(() => {
    fetch('/payload.json')
      .then(resp => resp.json())
      .then((data: Payload) => setPayload(data))
  }, [])

  const [todos_, dispatch] = useReducer(
    (state: Todo[], action: ActionType) => {
      switch (action.type) {
        case "ADD":
          return [...state,
          {
            id: state.length,
            text: action.text,
            done: false
          }
          ]
        case "REMOVE":
          return state.filter(({ id }) => id !== action?.id)
        default:
          throw new Error()
      }
    }, [])

  const newTodoRef = useRef<HTMLInputElement>(null)
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value
      })
      newTodoRef.current.value = ''
    }
  }, [])

  // cusotm hook
  const [value, setValue] = useNumber(0)
  // const [value, setValue] = useState(0)

  //cusot HOOOK
  // const { todos, addTodo, removeTodo } = useTodosContext([
  //   { id: 0, text: 'loooo', done: false }
  // ])

  //custom hook provider
  const useTodos_ = useTodos()
  const useAddTodo_ = useAddTodo()
  const useRemoveTodo_ = useRemoveTodo()

  // const onAddTodo_ = useCallback(() => {
  //   if (newTodoRef.current) {
  //     addTodo(newTodoRef.current.value)
  //     newTodoRef.current.value = ''
  //   }
  // }, [addTodo])

  //redux state / ==========
  const todos = useSelector(selectTodos)
  const dispatch_ = useDispatch()

  const onAddTodo_ = useCallback(() => {
    if (newTodoRef.current) {
      dispatch_(addTodo(newTodoRef.current.value))
    }
  }, [dispatch_])

  /*
    using zustand
  */
  const useToDosWhitZustand = create<{
    todos_: Todo[]
    addTodo: (text: string) => void
    removeTodos: (idToremove: number) => void
  }>
    (set => ({
      todos_: [],
      addTodo: (text: string) => set(state => ({
        ...state.todos_,
        todos_: [
          ...state.todos_,
          {
            id: state.todos_.length,
            text,
            done: false
          }
        ]
      })),
      removeTodos: (idToremove: number) => set(state => ({
        ...state,
        todos: state.todos_.filter(({ id }) => id !== idToremove)
      }))
    }))

  // const { todos_, addTodo, removeTodos } = useToDosWhitZustand()

  return (
    <div className="App">
      <Incrementor value={value} setValue={setValue} />

      <Heading title='lorem ipsum' />

      <Box items={['d1', 'd2', 'd3']} onClick={onListClick} >
        <p>from app</p>
        <p>{JSON.stringify(payload)}</p>
      </Box>

      {todos_.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            onClick={() => dispatch({
              type: "REMOVE", id: todo.id
            })}>
            Remove
          </button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <button
          onClick={onAddTodo}>
          ADD
        </button>
      </div>
      {/* cusotm HOOK */}
      {/* {useTodos_.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            onClick={() => removeTodo(todo.id)}>
            Remove
          </button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={onAddTodo_}>
          ADD
        </button>
      </div> */}

      {/* using Generic for render */}
      {/* <UL
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => (
          <>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
          </>
        )}
      /> */}
    </div>
  );
}

const AppWrapper = () => (
  <TodosProvider initialTodos={[{ id: 0, text: 'loooo', done: false }]}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: "50% 50%"
      }}
    >
      <App></App>
      <App></App>
    </div>
  </TodosProvider>
)

// export default AppWrapper


const AppWrapperRedux = () => (
  <Provider store={strore}>
    <App />
  </Provider>
)

export default AppWrapperRedux 