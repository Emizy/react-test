import {render, screen, fireEvent} from '@testing-library/react';
import Todo from "../Todo";
import {BrowserRouter} from "react-router-dom";

const MockTodo = ({numberOfIncompleteTasks}) => {
    return (
        <>
            <BrowserRouter>
                <Todo/>
            </BrowserRouter>
        </>
    )
}
const addTask = (tasks) => {
    const inputElement = screen.getByTestId('input-text')
    const buttonElement = screen.getByTestId('input-button')
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement)
    })
}
describe('Todo Integration test', () => {
    it('should test todo add flow', () => {
        render(<MockTodo/>)
        addTask(['I love coding', 'Fetching document', 'Adding notes to document'])
        const divElement = screen.getAllByTestId('task-container')
        expect(divElement.length).toBe(3)

    })
    it('should render tasks with active task color', () => {
        render(<MockTodo/>)
        addTask(['I love coding'])
        const divElement = screen.getByText(/I love coding/i)
        expect(divElement).not.toHaveClass('todo-item-active')

    })
    it('should have tasks with active task color', () => {
        render(<MockTodo/>)
        addTask(['I love coding'])
        const divElement = screen.getByText(/I love coding/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active')

    })
})