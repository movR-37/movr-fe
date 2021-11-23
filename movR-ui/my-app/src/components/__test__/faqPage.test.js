import React from 'react';
import mockFire from '../../config/__mocks__/firebase.config';
import { act } from 'react-dom/test-utils';
import { getByPlaceholderText, render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import { useForm } from "react-hook-form";
import FaqPage from '../../Pages/faqPage/faqPage';
jest.mock("react-hook-form");
jest.mock("../../config/__mocks__/firebase.config");

it("renders first Question without crashing", () => {
    const { getByText } = render(<FaqPage/>);
    const linkElement = getByText('How is my payment made?');
    expect(linkElement).toBeInTheDocument();
})

it("renders second Question without crashing", () => {
    const { getByText } = render(<FaqPage/>);
    const linkElement = getByText('How to request a service?');
    expect(linkElement).toBeInTheDocument();
})

it("renders third Question without crashing", () => {
    const { getByText } = render(<FaqPage/>);
    const linkElement = getByText('How are the tariffs calculated?');
    expect(linkElement).toBeInTheDocument();
})

it("renders fourth Question without crashing", () => {
    const { getByText } = render(<FaqPage/>);
    const linkElement = getByText('Can I Cancel a service?');
    expect(linkElement).toBeInTheDocument();
})

it("renders fifth Question without crashing", () => {
    const { getByText } = render(<FaqPage/>);
    const linkElement = getByText('Can I pay in cash?');
    expect(linkElement).toBeInTheDocument();
})

it("renders sixth Question without crashing", () => {
    const { getByText } = render(<FaqPage/>);
    const linkElement = getByText('What is the cancellation fee?');
    expect(linkElement).toBeInTheDocument();
})

