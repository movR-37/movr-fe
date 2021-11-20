import React from 'react';
import Signup from '../Signup';
import mockFire from '../../config/__mocks__/firebase.config';
import { act } from 'react-dom/test-utils';
import { getByPlaceholderText, render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import { useForm } from "react-hook-form";
jest.mock("react-hook-form");
jest.mock("../../config/__mocks__/firebase.config");

beforeEach(() => {
    // Mock getLocalizedText with a function that returns the key itself
    const mockUseFormPush = jest.fn();
    useForm.mockReturnValue({ handleSubmit:() => (mockUseFormPush)})
  });

it("Signup - renders Email without crashing", () => {

    const { getByPlaceholderText } = render(<Signup/>);
    const linkElement = getByPlaceholderText('Email');
    expect(linkElement).toBeInTheDocument();
})

it("Signup - renders Password without crashing", () => {
    const { getByPlaceholderText } = render(<Signup/>);
    const linkElement = getByPlaceholderText('Password');
    expect(linkElement).toBeInTheDocument();
})

it("Signup - renders Title without crashing", () => {
    const { getByText } = render(<Signup/>);
    const linkElement = getByText('User Registration');
    expect(linkElement).toBeInTheDocument();
})

it("renders message without crashing", () => {
    const { getByText } = render(<Signup/>);
    const linkElement = getByText('Already have an account? Login here.');
    expect(linkElement).toBeInTheDocument();
})

it("Signup - Creates a new account without crasing", async () => {

  // build mock user auth
  const signupFunction = jest.fn(async () => {});
  await mockFire.auth.mockReturnValue({createUserWithEmailAndPassword : signupFunction()} );
  const { getByTestId} = render(<Signup/>);
  const linkElement = getByTestId('buttonSignup');
  act(() => {
    /* fire events that update state */
    fireEvent.click(linkElement);
  });
  expect(signupFunction.mock.calls.length).toBe(1);
})
