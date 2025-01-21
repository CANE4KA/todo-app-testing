import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import { ITodo } from '../../types/ITodo'

import { isValid } from './isValid'

interface Props {
	setTodos: Dispatch<SetStateAction<ITodo[]>>
	todos: ITodo[]
}

const TodoForm = ({ setTodos, todos }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<ITodo>({ mode: 'onChange' })

	const onSubmit = (data: ITodo) => {
		setTodos([
			...todos,
			{
				id: todos.length + 1,
				value: data.value,
				isComplete: false
			}
		])
		reset()
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='relative flex items-center justify-center gap-5'
			>
				<input
					{...register('value', {
						validate: value => isValid(value) || 'Enter valid text, plz)'
					})}
					type='text'
					placeholder='Whats needs to be done?'
					className='outline-none border-b border-gray-300 bg-white py-2 px-5 w-full placeholder:text-[#d6d6d6]'
				/>

				{errors.value && (
					<span className='absolute left-0 top-9 text-sm text-red-800 font-semibold'>
						{errors.value.message}
					</span>
				)}
			</form>
		</>
	)
}

export default TodoForm
