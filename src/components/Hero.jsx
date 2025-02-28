import heroImg from "../icons_assets/restauranfood.jpg";
const Hero = () => {
  return (
    <section>
      <article>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mditerranean restaurant, focused on traditional
          recipes served with modern twist.{" "}
        </p>
        <button> Reserve a Table</button>
      </article>
      <figure>
        <img src={heroImg} alt="hero_img" width={200} />
      </figure>
    </section>
  );
};

export default Hero;
