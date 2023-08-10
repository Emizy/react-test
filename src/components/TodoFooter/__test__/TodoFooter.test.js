import {render, screen} from '@testing-library/react';
import TodoFooter from "../TodoFooter";
import {BrowserRouter} from "react-router-dom"

const MockTodo = ({numberOfIncompleteTasks}) => {
    return (
        <>
            <BrowserRouter>
                <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
            </BrowserRouter>
        </>
    )
}

describe('TodoFooter', () => {
    it('should render Todo footer', () => {
        render(<MockTodo numberOfIncompleteTasks={1}/>)
        const paragraph = screen.getByText('1 task left')
        expect(paragraph).toBeInTheDocument()

    })
    it('should render Todo footer with task more than 1', () => {
        render(<MockTodo numberOfIncompleteTasks={2}/>)
        const paragraph = screen.getByText('2 tasks left')
        expect(paragraph).toBeVisible()

    })
    it('should render Todo footer to contain p tag', () => {
        render(<MockTodo numberOfIncompleteTasks={2}/>)
        const paragraph = screen.getByText('2 tasks left')
        expect(paragraph).toContainHTML('p')

    })
    it('should render Todo footer to have test content', () => {
        render(<MockTodo numberOfIncompleteTasks={2}/>)
        const paragraph = screen.getByText('2 tasks left')
        expect(paragraph).toHaveTextContent('2 tasks left')

    })
})
