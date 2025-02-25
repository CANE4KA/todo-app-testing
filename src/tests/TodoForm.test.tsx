import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import TodoForm from '../components/todoForm/TodoForm'

import { ITodo } from '../types/ITodo'

const mockSetTodos = jest.fn()
const mockTodos: ITodo[] = []

test('добавляет новую задачу', async () => {
	render(<TodoForm setTodos={mockSetTodos} todos={mockTodos} />)

	const input = screen.getByPlaceholderText('Whats needs to be done?')
	fireEvent.change(input, { target: { value: 'Новая задача' } })

	const form = screen.getByRole('form')
	fireEvent.submit(form)

	await waitFor(() => {
		expect(mockSetTodos).toHaveBeenCalledWith([
			{ value: 'Новая задача', isComplete: false, id: expect.any(Number) }
		])
	})
})
