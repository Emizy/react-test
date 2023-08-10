import {render, screen, waitFor} from '@testing-library/react';
import {act} from "react-dom/test-utils"
import {BrowserRouter} from "react-router-dom";
import FollowersList from "../FollowersList";

const MockTest = () => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}
describe('Follower test', () => {
    it('should render Followers apps', async () => {
        act(() => {
            render(<MockTest/>)
        })

        const taskElement = await screen.findByTestId('follower-item-0')
        await waitFor(() => expect(taskElement).toBeInTheDocument())
    })
})
