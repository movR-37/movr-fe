import React from 'react';
import mockFire from '../../config/__mocks__/firebase.config';
import { act } from 'react-dom/test-utils';
import { getByPlaceholderText, render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import { useForm } from "react-hook-form";
import Payment from '../../Pages/Payment/Payment';
jest.mock("react-hook-form");
jest.mock("../../config/__mocks__/firebase.config");

beforeEach(() => {
    //Mock getLocalizedText with a function that returns the key itself
    const mockUseFormPush = jest.fn();
    useForm.mockReturnValue({ handleSubmit:() => (mockUseFormPush)})
  });

// it("renders Email without crashing", () => {

//     const { getByPlaceholderText } = render(<Login/>);
//     const linkElement = getByPlaceholderText('Email');
//     expect(linkElement).toBeInTheDocument();
// })

// it("renders Password without crashing", () => {
//     const { getByPlaceholderText } = render(<Login/>);
//     const linkElement = getByPlaceholderText('Password');
//     expect(linkElement).toBeInTheDocument();
// })

// it("renders Title without crashing", () => {
//     const { getByText } = render(<Login/>);
//     const linkElement = getByText('User Login');
//     expect(linkElement).toBeInTheDocument();
// })

// it("renders message without crashing", () => {
//     const { getByText } = render(<Login/>);
//     const linkElement = getByText('Create a new account.');
//     expect(linkElement).toBeInTheDocument();
// })

it("Payment - logs in without crashing", async () => {

    // build mock user auth
    const loginFunction = jest.fn(async () => {});
    await mockFire.auth.mockReturnValue({signInWithEmailAndPassword : loginFunction()} );
    const { getByTestId} = render(<Login/>);
    const linkElement = getByTestId('buttonLogin');
    act(() => {
        /* fire events that update state */
        fireEvent.click(linkElement);
    }); 
    expect(loginFunction.mock.calls.length).toBe(1);
  })
