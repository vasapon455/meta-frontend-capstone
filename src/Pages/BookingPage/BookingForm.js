import { useEffect, useState } from "react";
import "./BookingPage.css";

export default function BookingForm({
  availableTime,
  setAvailableTime,
  submitForm,
}) {
  const today = new Date().toISOString().slice(0, 10);
  console.log(today);

  const data = { date: today, time: "", guest: "", occasion: "" };

  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => [{ ...prevData, [name]: value }]);
    setAvailableTime(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        className="input-field"
        type="date"
        id="res-date"
        value={formData.date}
        onChange={handleChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        className="dropdown"
        id="res-time"
        value={formData.time}
        onChange={handleChange}
      >
        {availableTime.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        className="input-field"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formData.guest}
        onChange={handleChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        className="dropdown"
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        className="btn-small"
      />
    </form>
  );
}
