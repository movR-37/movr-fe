import React from 'react';
import mockFire from '../../config/__mocks__/firebase.config';
import Form from '../../components/Form.jsx';
import { act } from 'react-dom/test-utils';
import { getByPlaceholderText, render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import { useForm } from "react-hook-form";
import ProfilePage from '../../Pages/ProfilePage/ProfilePage';
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
//     const { getAllByText } = render(<ProfilePage/>);
//     const linkElement = getByText('Create a new account.');
//     expect(linkElement).toBeInTheDocument();
// })

it("Profile - Estimate cost time input field renders correctly", () => {
    const { getByLabelText} = render(<Form/>);
    const linkElement = getByLabelText('Time');
    act(() => {
        /* fire events that update state */
        fireEvent.change(linkElement, { target: { value: 1 } });
    }); 
    expect(linkElement.value).toBe("1");
})

it("Profile - Estimate cost distance input field renders correctly", () => {
    const { getByLabelText} = render(<Form/>);
    const linkElement = getByLabelText('Distance');
    act(() => {
        /* fire events that update state */
        fireEvent.change(linkElement, { target: { value: 1 } });
    }); 
    expect(linkElement.value).toBe("1");
})

it("Profile - Estimate cost output field renders correctly", () => {
    const { getByLabelText} = render(<Form/>);
    const linkElement = getByLabelText('Estimated Cost');
    expect(linkElement.value).toBe("$$");
})

it("Profile - Estimate cost calculates correct estimate", async () => {
    const { getByLabelText} = render(<Form/>);
    const linkElement = getByLabelText('Distance');
    act(() => {
        /* fire events that update state */
        fireEvent.change(linkElement, { target: { value: 1 } });
    }); 
    expect(linkElement.value).toBe("1");
    const linkElement2 = getByLabelText('Time');
    act(() => {
        /* fire events that update state */
        fireEvent.change(linkElement2, { target: { value: 1 } });
    });
    expect(linkElement2.value).toBe("1");
    const linkElementButton = getByLabelText('subButton');
    act(() => {
        /* fire events that update state */
        fireEvent.click(linkElementButton);
    });
    const linkElement3 = getByLabelText('Estimated Cost');
    expect(linkElement3.value).toBe("36.17");
  })
