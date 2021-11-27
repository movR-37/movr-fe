import React from 'react';
import Form from '../../components/Form.jsx';
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import ProfileCollage from "../../components/collage/ProfileCollage";
import { act } from 'react-dom/test-utils';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { useForm } from "react-hook-form";
jest.mock("react-hook-form");
jest.mock("../../config/__mocks__/firebase.config");

beforeEach(() => {
    //Mock getLocalizedText with a function that returns the key itself
    const mockUseFormPush = jest.fn();
    useForm.mockReturnValue({ handleSubmit:() => (mockUseFormPush)})
  });

it("Profile - Renders title without crashing", () => {
    const { getByTestId } = render(<ProfileHeader/>);
    const linkElement = getByTestId('profileHeader-title');
    expect(linkElement).toBeInTheDocument();
})

it("Profile - Renders review bar without crashing", () => {
    const { getByTestId } = render(<ProfileHeader/>);
    const linkElement = getByTestId('profileHeader-review');
    expect(linkElement).toBeInTheDocument();
})

// it("Profile - Renders Collage container without crashing", () => {
//     const { getByTestId } = render(<ProfileCollage/>);
//     const linkElement = getByTestId('collage-masterdiv');
//     expect(linkElement).toBeInTheDocument();
// })

// it("Profile - Renders review bar without crashing", () => {
//     const { getByTestId } = render(<ProfileCollage/>);
//     const linkElement = getByTestId('collage-masterGrid');
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
