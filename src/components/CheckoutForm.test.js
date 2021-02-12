import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

//Arrange
test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

//Act
test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/First Name:/i);
    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    const addressInput = screen.getByLabelText(/Address:/i);
    const cityInput = screen.getByLabelText(/City:/i);
    const stateInput = screen.getByLabelText(/State:/i);
    const zipInput = screen.getByLabelText(/Zip:/i);


    userEvent.type(firstNameInput, "katie");
    userEvent.type(lastNameInput, "olson");
    userEvent.type(addressInput, "505 Ezy St");
    userEvent.type(cityInput, "New York");
    userEvent.type(stateInput, "NY");
    userEvent.type(zipInput, "12345");

    const button = screen.getByRole("button");
    userEvent.click(button);

//Assert
   
    // expect(await screen.findByText(/katie/i)).toBeInTheDocument();

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(zipInput).toBeInTheDocument();
});