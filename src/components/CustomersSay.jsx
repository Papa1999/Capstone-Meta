import React from "react";

const CustomersSay = () => {
  return (
    <section
      className="w-10/12 mx-auto mt-10 h-screen flex flex-col items-center "
      id="testimonials"
    >
      <h3 className="text-3xl translate-y-[100px] font-serif ">Testimonials</h3>
      <div
        role="group"
        className="h-[80%] w-full flex items-center justify-between gap-7 max-md:flex-col"
      >
        <article className="flex-1 bg-[#EDEFEE] px-8 py-8 rounded-md">
          <h5 className="font-bold font-serif tracking-wider">Rating</h5>
          <figure>
            <img src="" alt="pic profile" />
            <figcaption className="text-sm font-light">Name</figcaption>
          </figure>
          <p className="font-light">Review Text</p>
        </article>
        <article className="flex-1 bg-[#EDEFEE] px-8 py-8 rounded-md">
          <h5 className="font-bold font-serif tracking-wider">Rating</h5>
          <figure>
            <img src="" alt="" />
            <figcaption className="text-sm font-light">Name</figcaption>
          </figure>
          <p className="font-light">Review Text </p>
        </article>
        <article className="flex-1 bg-[#EDEFEE] px-8 py-8 rounded-md">
          <h5 className="font-bold font-serif tracking-wider">Rating</h5>
          <figure>
            <img src="" alt="" />
            <figcaption className="text-sm font-light">Name</figcaption>
          </figure>
          <p className="font-light">Review Text </p>
        </article>
        <article className="flex-1 bg-[#EDEFEE] px-8 py-8 rounded-md">
          <h5 className="font-bold font-serif tracking-wider">Rating</h5>
          <figure>
            <img src="" alt="" />
            <figcaption className="text-sm font-light">Name</figcaption>
          </figure>
          <p className="font-light">Review Text </p>
        </article>
      </div>
    </section>
  );
};

export default CustomersSay;
