import React from 'react';
import mockFire from '../../config/__mocks__/firebase.config';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { useForm } from "react-hook-form";
import ContactUs from '../../Pages/ContactUsPage/ContactUs';
jest.mock("react-hook-form");
jest.mock("../../config/__mocks__/firebase.config");

beforeEach(() => {
    //Mock getLocalizedText with a function that returns the key itself
    const mockUseFormPush = jest.fn();
    useForm.mockReturnValue({ handleSubmit:() => (mockUseFormPush)})
  });

it("Contact Us - renders Email field without crashing", () => {

    const { getByPlaceholderText } = render(<ContactUs/>);
    const linkElement = getByPlaceholderText('Email…');
    expect(linkElement).toBeInTheDocument();
})

it("Contact Us - renders Name field without crashing", () => {
    const { getByPlaceholderText } = render(<ContactUs/>);
    const linkElement = getByPlaceholderText('Name…');
    expect(linkElement).toBeInTheDocument();
})

it("Contact Us - renders Message text field without crashing", () => {
    const { getByPlaceholderText } = render(<ContactUs/>);
    const linkElement = getByPlaceholderText('Message…');
    expect(linkElement).toBeInTheDocument();
})

it("Contact Us - renders Submit button without crashing", () => {
    const { getByTestId } = render(<ContactUs/>);
    const linkElement = getByTestId('submitButton');
    expect(linkElement).toBeInTheDocument();
})

it("Contact Us - Submits form without crashing", async () => {

    // build mock user auth
    const submitFunction = jest.fn(async () => {});
    await mockFire.auth.mockReturnValue({subtmitContactUsForm : submitFunction()} );
    const { getByTestId} = render(<ContactUs/>);
    const linkElement = getByTestId('submitButton');
    act(() => {
        /* fire events that update state */
        fireEvent.click(linkElement);
    }); 
    expect(submitFunction.mock.calls.length).toBe(1);
  })