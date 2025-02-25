import { Dispatch, SetStateAction } from 'react'
import { twMerge } from 'tailwind-merge'

import { ITodo } from '../../types/ITodo'

interface Props {
	todos: ITodo[]
	filter: 'all' | 'active' | 'completed'
	setFilter: Dispatch<SetStateAction<'all' | 'active' | 'completed'>>
	setTodos: Dispatch<SetStateAction<ITodo[]>>
}

export const ActionMenu = ({ todos, setFilter, setTodos, filter }: Props) => {
	return (
		<div className='flex items-center justify-between p-2 text-[#d6d6d6]'>
			{todos.length !== 0
				? `${todos.filter(todo => !todo.isComplete).length} items left`
				: 'Todo list is empty.'}

			<div className='flex gap-3'>
				<button
					title="View all todo's"
					onClick={() => setFilter('all')}
					className={twMerge(
						'border border-transparent rounded px-1',
						filter === 'all' ? 'border-[#c99b75]/50' : ''
					)}
				>
					All
				</button>

				<button
					title="View active todo's"
					onClick={() => setFilter('active')}
					className={twMerge(
						'border border-transparent rounded px-1',
						filter === 'active' ? 'border-[#c99b75]/50' : ''
					)}
				>
					Active
				</button>

				<button
					title="View completed todo's"
					onClick={() => setFilter('completed')}
					className={twMerge(
						'border border-transparent rounded px-1',
						filter === 'completed' ? 'border-[#c99b75]/50' : ''
					)}
				>
					Completed
				</button>
			</div>

			<button
				title="Remove all completed todo's"
				onClick={() => setTodos(todos.filter(todo => !todo.isComplete))}
			>
				Clear completed
			</button>
		</div>
	)
}
