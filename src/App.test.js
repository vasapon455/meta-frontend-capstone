import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "./Pages/BookingPage/BookingPage";
import { fetchAPI, submitAPI } from "./utils/fakeAPI";
import { redirect, useNavigate } from "react-router";

const today = new Date().toISOString().slice(0, 10);

const initializeTimes = () => {
  const date = new Date();
  return [...fetchAPI(date)];
};

const updateTime = (availableTime, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTime;
};

const submitForm = (formData) => {
  if (submitAPI(formData) === true) {
    redirect("/booking/submit");
  }
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

test("Can't select the previous date.", async () => {
  render(
    <BookingPage
      availableTime={initializeTimes()}
      setAvailableTime={updateTime}
    />
  );
  const startDate = screen.getByTestId("select-date");
  fireEvent.mouseDown(startDate);
  fireEvent.change(startDate, { target: { value: "10-12-2023" } });
  expect(startDate.value).toContain("");
});

test("Must select time", async () => {
  render(
    <BookingPage
      availableTime={initializeTimes()}
      setAvailableTime={updateTime}
      submitForm={submitForm}
    />
  );
  const startTime = screen.getByTestId("select-time");
  const submit = screen.queryByTestId("submit");
  fireEvent.click(submit);
  expect(startTime).toBeRequired();
});

test("Can't select 0 guest", async () => {
  render(
    <BookingPage
      availableTime={initializeTimes()}
      setAvailableTime={updateTime}
      submitForm={submitForm}
    />
  );
  const startGuest = screen.getByTestId("specify-guest");
  expect(startGuest).toBeRequired();
});

test("Can't select no occasion", async () => {
  render(
    <BookingPage
      availableTime={initializeTimes()}
      setAvailableTime={updateTime}
      submitForm={submitForm}
    />
  );
  const startOccasion = screen.getByTestId("select-occasion");
  expect(startOccasion).toBeRequired();
});
