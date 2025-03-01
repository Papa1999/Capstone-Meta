import { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(null);
  const [numberOfGuest, setNumberOfGuest] = useState(0);
  const [occasion, setOccasion] = useState("Occasion");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleGuestChange = (e) => {
    e.target.value < 11
      ? setNumberOfGuest(e.target.value)
      : alert("The value should be between 1 and 10");
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <form className="grid max-w-[200px] gap-5 ">
        <label
          htmlFor="res-date"
          className="font-serif font-semibold text-[18px]"
        >
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          className="border border-gray-300 rounded p-2"
          value={date}
          onChange={handleDateChange}
        />

        <label
          htmlFor="res-time"
          className="font-serif font-semibold text-[18px]"
        >
          Choose time
        </label>
        <select
          id="res-time"
          className="border border-gray-300 rounded p-2"
          value={time}
          onChange={handleTimeChange}
        >
          <option defaultChecked>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>

        <label
          htmlFor="guests"
          className="font-serif font-semibold text-[18px]"
        >
          Number of guests
        </label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={numberOfGuest}
          onChange={handleGuestChange}
          className="border border-gray-300 rounded p-2"
        />

        <label
          htmlFor="occasion"
          className="font-serif font-semibold text-[18px]"
        >
          Occasion
        </label>
        <select
          id="occasion"
          className="border border-gray-300 rounded p-2"
          value={occasion}
          onChange={handleOccasionChange}
        >
          <option defaultChecked className="bg-[#EDEFEE]">
            {occasion}
          </option>
          <option>Birthday</option>
          <option>Engagement</option>
          <option>Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your Reservation"
          className="bg-[#F4CE14] text-black font-semibold rounded p-2 cursor-pointer hover:bg-yellow-500 transition"
        />
      </form>
    </section>
  );
};

export default BookingForm;
