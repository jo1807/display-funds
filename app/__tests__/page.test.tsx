/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "../page";

it("displays fund data", () => {
  render(<Page />);

  expect(screen.getByRole("heading")).toHaveTextContent("Element Investments");

  expect(screen.getByText("Growth Funds")).toBeTruthy();
  expect(screen.getByText("Responsible Fund")).toBeTruthy();

  fireEvent.click(screen.getByText("Growth Funds"));

  expect(screen.getByText("VT Element Cautious")).toBeVisible();
  expect(screen.getByText("VT Element Balanced")).toBeVisible();
  expect(screen.getByText("VT Element Adventurous")).toBeVisible();

  fireEvent.click(screen.getByText("Responsible Fund"));

  expect(screen.queryByText("VT Element Cautious")).toBeNull();
  expect(screen.queryByText("VT Element Balanced")).toBeNull();
  expect(screen.queryByText("VT Element Adventurous")).toBeNull();

  expect(screen.getByText("VT Element Responsible Gr")).toBeVisible();
});
