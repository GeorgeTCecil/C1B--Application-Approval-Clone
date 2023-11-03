import { render, fireEvent, screen } from "@testing-library/react";
import React, { useState } from "react";
import "@testing-library/jest-dom";
import InitialsInputField from "../components/InitialsInputField";

test("InitialsInputField handles input and callback correctly", () => {
  const handleCallback = jest.fn();
  const { getByTestId } = render(
    <InitialsInputField handleCallback={handleCallback} />
  );

  const inputElement = getByTestId("input");

  // Type valid input
  fireEvent.change(inputElement, { target: { value: "AB" } });
  expect(inputElement.value).toBe("AB");
  expect(handleCallback).toHaveBeenCalledWith("AB");

  // Type invalid input (numbers)
  fireEvent.change(inputElement, { target: { value: "123" } });
  expect(inputElement.value).toBe("AB"); // Value should not change
  expect(handleCallback).toHaveBeenCalledWith("AB"); // Callback should not be called again
});

test("InitialsInputField maximum length", () => {
  const handleCallback = jest.fn();
  render(<InitialsInputField handleCallback={handleCallback} />);

  const inputElement = screen.getByTestId("input");
  expect(inputElement).toHaveAttribute("maxLength", "2"); //MaxLength is 2
});
