import React from "react";
import Header from "./Header";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <>
      <Header />
      <BookingForm />
      <Specials />
      <CustomersSay />
      <Footer />
    </>
  );
};

export default BookingPage;
