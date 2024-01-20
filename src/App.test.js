import { render, screen } from "@testing-library/react";
import BookingPage from "./Pages/BookingPage/BookingPage";
import { fetchAPI } from "./utils/fakeAPI";
import { useReducer } from "react";

const initializeTimes = () => {
  const date = new Date();
  return [...fetchAPI(date)];
};

const updateTime = (availableTime, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTime;
};

test("Renders the BookingForm heading", () => {
  render(<BookingPage availableTime={initializeTimes()} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Render bookingform and test initialize time", async () => {
  render(<BookingPage availableTime={initializeTimes()} />);
  const options = await screen.findAllByTestId("booking-time");
  expect(options.length).toBeGreaterThanOrEqual(1);
});

test("Return value from Update Time function", async () => {
  render(
    <BookingPage
      availableTime={initializeTimes()}
      setAvailableTime={updateTime}
    />
  );
  const options = await screen.findAllByTestId("booking-time");
  expect(options.length).toBeGreaterThanOrEqual(1);
});
