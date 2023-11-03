import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AcceptanceDashboard from "../routes/AcceptanceDashboard";
import CreditProtectionDrawer from "../components/CreditProtectionDrawer";
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

describe("AcceptanceDashboard", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(<AcceptanceDashboard />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

describe("CreditProtectionDrawer", () => {
  it("should have no accessibility violations", async () => {
    const { container } = render(<CreditProtectionDrawer />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
