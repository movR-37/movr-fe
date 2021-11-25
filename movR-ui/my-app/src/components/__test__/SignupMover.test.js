import React from 'react';
import mockFire from '../../config/__mocks__/firebase.config';
import { act } from 'react-dom/test-utils';
import { getByPlaceholderText, render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import { useForm } from "react-hook-form";
import SignupMover from '../SignupMover';
jest.mock("react-hook-form");
jest.mock("../../config/__mocks__/firebase.config");

beforeEach(() => {
    // Mock getLocalizedText with a function that returns the key itself
    const mockUseFormPush = jest.fn();
    useForm.mockReturnValue({ handleSubmit:() => (mockUseFormPush)})
  });

it("SignupMover - renders Email without crashing", () => {

    const { getByPlaceholderText } = render(<SignupMover/>);
    const linkElement = getByPlaceholderText('Email');
    expect(linkElement).toBeInTheDocument();
})

it("SignupMover - renders Password without crashing", () => {
    const { getByPlaceholderText } = render(<SignupMover/>);
    const linkElement = getByPlaceholderText('Password');
    expect(linkElement).toBeInTheDocument();
})

it("SignupMover - renders Title without crashing", () => {
    const { getByText } = render(<SignupMover/>);
    const linkElement = getByText('User Registration Mover');
    expect(linkElement).toBeInTheDocument();
})

it("renders message without crashing", () => {
    const { getByText } = render(<SignupMover/>);
    const linkElement = getByText('Already have an account? Login here.');
    expect(linkElement).toBeInTheDocument();
})

it("SignupMover - Creates a new account without crasing", async () => {

  // build mock user auth
  const signupFunction = jest.fn(async () => {});
  await mockFire.auth.mockReturnValue({createUserWithEmailAndPassword : signupFunction()} );
  const { getByTestId} = render(<SignupMover/>);
  const linkElement = getByTestId('buttonSignup');
  act(() => {
    /* fire events that update state */
    fireEvent.click(linkElement);
  });
  expect(signupFunction.mock.calls.length).toBe(1);
})
