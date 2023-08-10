import {render, screen} from '@testing-library/react';
import Followers from "../Followers";
import {BrowserRouter} from "react-router-dom";

const MockTest = () => {
    return (
        <BrowserRouter>
            <Followers/>
        </BrowserRouter>
    )
}
describe('Follower test', () => {
    it('should render Followers apps', () => {
        render(<MockTest/>)
    })
})
