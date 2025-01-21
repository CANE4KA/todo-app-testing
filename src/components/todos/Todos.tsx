import { ITodo } from '../../types/ITodo'
import { Todo } from '../todo/Todo'

interface Props {
	todos: ITodo[]
	deleteHandler: (id: number) => void
	completeHandler: (id: number) => void
}

export const Todos = ({ todos, deleteHandler, completeHandler }: Props) => {
	return (
		<div>
			{todos.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					deleteHandler={deleteHandler}
					completeHandler={completeHandler}
				/>
			))}
		</div>
	)
}
