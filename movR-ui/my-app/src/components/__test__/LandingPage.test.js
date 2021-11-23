import React from 'react';
import mockFire from '../../config/__mocks__/firebase.config';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import LandingPage from '../LandingPage/LandingPage';
import { useForm } from "react-hook-form";
jest.mock("react-hook-form");
jest.mock("../../config/__mocks__/firebase.config");
jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));


beforeEach(() => {
    //Mock getLocalizedText with a function that returns the key itself
    const mockUseFormPush = jest.fn();
    useForm.mockReturnValue({ handleSubmit:() => (mockUseFormPush)})
  });

it("Landing Page - renders master div for component", () => {
    const { getByTestId } = render(<LandingPage/>);
    const linkElement = getByTestId('landingMaster');
    expect(linkElement).toBeInTheDocument();
})

it("Landing Page - renders Client Title without crashing", () => {
    const { getByText } = render(<LandingPage/>);
    const linkElement = getByText('I\'m a client!');
    expect(linkElement).toBeInTheDocument();
})

it("Landing Page - renders Mover Title without crashing", () => {
    const { getByText } = render(<LandingPage/>);
    const linkElement = getByText('I\'m a mover!');
    expect(linkElement).toBeInTheDocument();
})

it("Landing Page - renders Client Logo without crashing", () => {
    const { getByTestId } = render(<LandingPage/>);
    const linkElement = getByTestId('userImg');
    expect(linkElement).toBeInTheDocument();
})

it("Landing Page - renders Mover Logo without crashing", () => {
    const { getByTestId } = render(<LandingPage/>);
    const linkElement = getByTestId('moverImg');
    expect(linkElement).toBeInTheDocument();
})

it("Landing Page - Presses on client option in without crashing", async () => {
    const SelectUserFunction = jest.fn(async () => {});
    await mockFire.auth.mockReturnValue({signInWithEmailAndPassword : SelectUserFunction()} );
    const { getByTestId} = render(<LandingPage/>);
    const linkElement = getByTestId('userImg');
    act(() => {
        /* fire events that update state */
        fireEvent.click(linkElement);
    }); 
    expect(SelectUserFunction.mock.calls.length).toBe(1);
})

it("Landing Page - Presses on mover option in without crashing", async () => {
    const SelectUserFunction = jest.fn(async () => {});
    await mockFire.auth.mockReturnValue({signInWithEmailAndPassword : SelectUserFunction()} );
    const { getByTestId} = render(<LandingPage/>);
    const linkElement = getByTestId('moverImg');
    act(() => {
        /* fire events that update state */
        fireEvent.click(linkElement);
    }); 
    expect(SelectUserFunction.mock.calls.length).toBe(1);
})

    