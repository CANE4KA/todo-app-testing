import { MdCheck, MdDelete } from 'react-icons/md'

import { ITodo } from '../../types/ITodo'

export interface Props {
	todo: ITodo
	deleteHandler: (id: number) => void
	completeHandler: (id: number) => void
}

export const Todo = ({ todo, deleteHandler, completeHandler }: Props) => {
	return (
		<div className='flex items-center justify-between py-3 px-1 rounded break-all border-b'>
			<div className='flex items-center gap-1'>
				<MdCheck
					title='Complete todo'
					className='hover:text-green-700 '
					onClick={() => completeHandler(todo.id)}
				/>
				<span className={todo.isComplete ? 'text-[#9c9c9c] line-through' : ''}>
					{todo.value}
				</span>
			</div>
			<MdDelete
				title='Delete todo'
				className='hover:text-red-700'
				onClick={() => deleteHandler(todo.id)}
			/>
		</div>
	)
}
