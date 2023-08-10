import {render, screen} from '@testing-library/react';
import Header from "../Header/Header";


describe('HeaderTest', () => {
    it('should render same test passed to props', () => {
        render(<Header title={'My Header'}/>)
        const headingElement = screen.getByText('My Header')
        expect(headingElement).toBeInTheDocument()
    });
})

// it('should render component with title', () => {
//     render(<Header title={'My Header'}/>)
//     const headingElement = screen.getByTitle('Header')
//     expect(headingElement).toBeInTheDocument()
// });
// it('should render component and get by test id', () => {
//     render(<Header title={'My Header'}/>)
//     const headingElement = screen.getByTestId('header-2')
//     expect(headingElement).toBeInTheDocument()
// });
// it('should render component and find by test', async () => {
//     render(<Header title={'My Header'}/>)
//     const headingElement = await screen.findByText('Cats')
//     expect(headingElement).toBeInTheDocument()
// });
// it('should render component and query by', () => {
//     render(<Header title={'My Header'}/>)
//     const headingElement = screen.queryByText(/dog/i)
//     expect(headingElement).not.toBeInTheDocument()
// });