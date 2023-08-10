import {render, screen, fireEvent} from '@testing-library/react';
import AddInput from "../AddInput";

const MockTodoTest = jest.fn()
describe('AddInput Test', () => {
    it('should render input element', async () => {
        render(<AddInput todos={[]} setTodos={MockTodoTest}/>)
        const hasPlaceHolderText = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(hasPlaceHolderText).toBeInTheDocument()
    })
    it('should be able to type into input field', async () => {
        render(<AddInput todos={[]} setTodos={MockTodoTest}/>)
        const hasPlaceHolderText = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(hasPlaceHolderText, {target: {value: 'Go shopping'}})
        expect(hasPlaceHolderText.value).toBe('Go shopping')
    })
    it('should have empty field when button clicked', async () => {
        render(<AddInput todos={[]} setTodos={MockTodoTest}/>)
        const hasPlaceHolderText = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole('button', {name: /Add/i})
        fireEvent.change(hasPlaceHolderText, {target: {value: 'Go shopping'}})
        fireEvent.click(buttonElement)
        expect(hasPlaceHolderText.value).toBe('')
    })
})