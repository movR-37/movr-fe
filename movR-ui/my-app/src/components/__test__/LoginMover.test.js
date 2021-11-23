import React from 'react';
import mockFire from '../../config/__mocks__/firebase.config';
import { act } from 'react-dom/test-utils';
import { getByPlaceholderText, render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import { useForm } from "react-hook-form";
import LoginMover from '../LoginMover';
jest.mock("react-hook-form");
jest.mock("../../config/__mocks__/firebase.config");

beforeEach(() => {
    //Mock getLocalizedText with a function that returns the key itself
    const mockUseFormPush = jest.fn();
    useForm.mockReturnValue({ handleSubmit:() => (mockUseFormPush)})
  });

it("renders Email without crashing", () => {

    const { getByPlaceholderText } = render(<LoginMover/>);
    const linkElement = getByPlaceholderText('Email');
    expect(linkElement).toBeInTheDocument();
})

it("renders Password without crashing", () => {
    const { getByPlaceholderText } = render(<LoginMover/>);
    const linkElement = getByPlaceholderText('Password');
    expect(linkElement).toBeInTheDocument();
})

it("renders Title without crashing", () => {
    const { getByText } = render(<LoginMover/>);
    const linkElement = getByText('User Login Mover');
    expect(linkElement).toBeInTheDocument();
})

it("renders message without crashing", () => {
    const { getByText } = render(<LoginMover/>);
    const linkElement = getByText('Create a new account.');
    expect(linkElement).toBeInTheDocument();
})

it("LoginMover - logs in without crashing", async () => {

    // build mock user auth
    const LoginMoverFunction = jest.fn(async () => {});
    await mockFire.auth.mockReturnValue({signInWithEmailAndPassword : LoginMoverFunction()} );
    const { getByTestId} = render(<LoginMover/>);
    const linkElement = getByTestId('buttonLogin');
    act(() => {
        /* fire events that update state */
        fireEvent.click(linkElement);
    }); 
    expect(LoginMoverFunction.mock.calls.length).toBe(1);
  })
