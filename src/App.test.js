import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingPage/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm times={["10:00", "11:00"]} />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

test(" test for the initializeTimes function to validate that it returns the correct expected value.", () => {
  render(<BookingForm times={["10:00", "11:00"]} />);
});
