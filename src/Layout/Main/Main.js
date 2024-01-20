import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import { useReducer, useState, useEffect } from "react";
import BookingPage from "../../Pages/BookingPage/BookingPage";
import { fetchAPI, submitAPI } from "../../utils/fakeAPI";
import ConfirmedBooking from "../../Pages/ConfirmedBooking/ConfirmedBooking";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [review, setReview] = useState();

  const fetchData = () => {
    try {
      fetch("https://randomuser.me/api/?results=4")
        .then((response) => response.json())
        .then((data) => setReview(data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();

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
      navigate("/booking/submit");
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTime, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage review={review} />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTime={availableTimes}
              setAvailableTime={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking/submit" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
