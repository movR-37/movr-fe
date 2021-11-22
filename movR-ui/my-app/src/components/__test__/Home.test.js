import React from 'react';
import HomePage from '../Home/HomePage';
import mockFire from '../../config/__mocks__/firebase.config';
import { act } from 'react-dom/test-utils';
import { getByPlaceholderText, render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import { useForm } from "react-hook-form";
import ReactRouter from 'react-router';
jest.mock("react-hook-form");
jest.mock("../../config/__mocks__/firebase.config");

const mockHistoryPush = jest.fn();
beforeEach(() => {
    jest.spyOn(ReactRouter, 'useHistory').mockReturnValue({ push: mockHistoryPush });
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ uid: 'yvA5gQe9IbdYeUgfXhfTfRIf5t43' });
    window.alert = () => {};
});

it("HomePage - renders Page without crashing", () => {
    const {getByTestId} = render(<HomePage/>);
    const linkElement = getByTestId("masterDiv");
    expect(linkElement).toBeInTheDocument();
})

it("HomePage - renders Type Dropdown without crashing", () => {
    const {getByTestId} = render(<HomePage/>);
    const linkElement = getByTestId("optionsDropDown");
    expect(linkElement).toBeInTheDocument();
})

it("HomePage - renders City Dropdown without crashing", () => {
    const {getByTestId} = render(<HomePage/>);
    const linkElement = getByTestId("demo-simple-select-id");
    expect(linkElement).toBeInTheDocument();
})

it("HomePage - renders get started button without crashing", () => {
    const {getByTestId} = render(<HomePage/>);
    const linkElement = getByTestId("getStartedButton");
    expect(linkElement).toBeInTheDocument();
})


