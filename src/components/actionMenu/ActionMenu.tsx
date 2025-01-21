import { Dispatch, SetStateAction } from 'react'

import { ITodo } from '../../types/ITodo'

interface Props {
	todos: ITodo[]
	setFilter: Dispatch<SetStateAction<'all' | 'active' | 'completed'>>
	setTodos: Dispatch<SetStateAction<ITodo[]>>
}

export const ActionMenu = ({ todos, setFilter, setTodos }: Props) => {
	return (
		<div className='flex items-center justify-between p-2 text-[#d6d6d6]'>
			{todos.length !== 0
				? `${todos.filter(todo => !todo.isComplete).length} items left`
				: 'Todo list is empty.'}

			<div className='flex gap-3'>
				<button title="View all todo's" onClick={() => setFilter('all')}>
					All
				</button>

				<button title="View active todo's" onClick={() => setFilter('active')}>
					Active
				</button>

				<button
					title="View completed todo's"
					onClick={() => setFilter('completed')}
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
