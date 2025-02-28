import React from "react";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";
const Specials = () => {
  return (
    <section className="mt-20">
      <header className="w-10/12 mx-auto flex justify-between">
        <h2 className="text-6xl font-semibold">This weeks specials!</h2>
        <button className="px-5 py-2 bg-[#F4CE14] font-semibold rounded-lg">
          Online Menu
        </button>
      </header>
      <div role="group" className="w-10/12 mx-auto flex mt-10 gap-6">
        <article className="w-1/3 flex flex-col items-center justify-between bg-[#EDEFEE]">
          <figure className="w-full">
            <img src={greekSalad} alt="greek salad" />
          </figure>
          <header className="flex gap-7">
            <h4 className="px-2 font-semibold">Greek Salad</h4>
            <span
              aria-label="Price: $12.99"
              className="text-[#EE9272] font-medium"
            >
              $12.99
            </span>
          </header>
          <p className="max-w-[80%] text-[#333333]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            sed quam harum aliquid nam assumenda?
          </p>
          <button className="font-semibold self-start ml-10">
            Order a delivery
          </button>
        </article>
        <article className="w-1/3 flex flex-col items-center justify-between bg-[#EDEFEE]">
          <figure className="w-full">
            <img src={bruchetta} alt="bruchetta" />
          </figure>
          <header className="flex gap-7">
            <h4 className="px-2 font-semibold">Bruchetta</h4>
            <span
              aria-label="Price: $7.99"
              className="text-[#EE9272] font-medium"
            >
              $7.99
            </span>
          </header>
          <p className="max-w-[80%] px-2 text-[#333333]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            sed quam harum aliquid nam assumenda?
          </p>
          <button className="font-semibold self-start ml-10">
            Order a delivery
          </button>
        </article>
        <article className="w-1/3 flex flex-col items-center justify-between bg-[#EDEFEE]">
          <figure className="w-full flex flex-col items-center">
            <img src={lemonDessert} alt="lemon dessert" />
          </figure>
          <header className="flex justify-between">
            <h4 className="px-2 font-semibold">Lemon Dessert</h4>
            <span aria-label="Price: $5" className="text-[#EE9272] font-medium">
              $5
            </span>
          </header>
          <p className="max-w-[80%] text-[#333333]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            sed quam harum aliquid nam assumenda?
          </p>
          <button className="font-semibold self-start ml-10">
            Order a delivery
          </button>
        </article>
      </div>
    </section>
  );
};

export default Specials;
