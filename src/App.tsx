import { useState } from 'react'

import { ActionMenu } from './components/actionMenu/ActionMenu'
import TodoForm from './components/todoForm/TodoForm'
import { Todos } from './components/todos/Todos'

import { ITodo } from './types/ITodo'

export const App = () => {
	const [todos, setTodos] = useState<ITodo[]>([])
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

	const deleteHandler = (id: number) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const completeHandler = (id: number) => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
			)
		)
	}

	const filteredTodos = () => {
		switch (filter) {
			case 'active':
				return todos.filter(todo => !todo.isComplete)
			case 'completed':
				return todos.filter(todo => todo.isComplete)
			default:
				return todos
		}
	}

	return (
		<>
			<h1 className='mb-3 text-[#c99b75] font-thin text-7xl'>todos</h1>

			<div className='border bg-white w-2/4 shadow-lg'>
				<TodoForm todos={todos} setTodos={setTodos} />

				<Todos
					todos={filteredTodos()}
					deleteHandler={deleteHandler}
					completeHandler={completeHandler}
				/>

				<ActionMenu todos={todos} setFilter={setFilter} setTodos={setTodos} />
			</div>
		</>
	)
}
