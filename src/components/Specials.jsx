import React from "react";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";
const Specials = () => {
  return (
    <section>
      <header>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </header>
      <article>
        <figure>
          <img src={greekSalad} alt="greek salad" width={250} />
        </figure>
        <h4>Greek Salad</h4>
        <span aria-label="Price: $12.99">$12.99</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi et
          facilis, adipisci amet illum veniam. Natus suscipit consectetur
          corrupti eius sapiente itaque, iure eum quas, vero quam nisi
          repudiandae sequi?
        </p>
        <button>Order a delivery</button>
      </article>
      <article>
        <figure>
          <img src={bruchetta} alt="bruchetta" width={250} />
        </figure>
        <h4>Bruchetta</h4>
        <span>$7.99</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi et
          facilis, adipisci amet illum veniam. Natus suscipit consectetur
          corrupti eius sapiente itaque, iure eum quas, vero quam nisi
          repudiandae sequi?
        </p>
        <button>Order a delivery</button>
      </article>
      <article>
        <figure>
          <img src={lemonDessert} alt="lemon dessert" width={250} />
        </figure>
        <h4>Lemon Dessert</h4>
        <span>$5</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi et
          facilis, adipisci amet illum veniam. Natus suscipit consectetur
          corrupti eius sapiente itaque, iure eum quas, vero quam nisi
          repudiandae sequi?
        </p>
        <button>Order a delivery</button>
      </article>
    </section>
  );
};

export default Specials;
