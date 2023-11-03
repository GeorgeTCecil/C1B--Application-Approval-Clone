import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button"; // Import your Button component

test("Button component renders with default props", () => {
  const { getByText } = render(<Button>Click Me</Button>);
  const buttonElement = getByText("Click Me");

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass(
    "overflow-y-auto cursor-pointer  rounded-full font-bold  border-solid border-2 border-credit-one-blue h-auto pt-2 pb-2 w-auto pl-4 pr-4 text-xs"
  );
  expect(buttonElement).toHaveAttribute("type", "button");
});

test("Button component renders with custom props", () => {
  const onClickMock = jest.fn();
  //Enter custom props
  const { getByText } = render(
    <Button isFilled={true} onClick={onClickMock}>
      Submit
    </Button>
  );
  const buttonElement = getByText("Submit");

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass(
    "overflow-y-auto cursor-pointer  rounded-full font-bold  border-solid border-2 border-credit-one-blue h-auto pt-2 pb-2 w-auto pl-4 pr-4 text-xs"
  );
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
