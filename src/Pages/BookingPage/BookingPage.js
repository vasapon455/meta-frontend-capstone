import BookingForm from "./BookingForm";
import "./BookingPage.css";

export default function BookingPage({
  availableTime,
  setAvailableTime,
  submitForm,
}) {
  return (
    <>
      <article id="booking-section">
        <h1>Book Now</h1>
        <BookingForm
          availableTime={availableTime}
          setAvailableTime={setAvailableTime}
          submitForm={submitForm}
        />
      </article>
    </>
  );
}
