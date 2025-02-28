import heroImg from "../icons_assets/restauranfood.jpg";
const Hero = () => {
  return (
    <section className="bg-[#495E57] flex justify-center items-center h-[80vh]">
      <article className="w-5/12 flex flex-col ">
        <h1 className="text-[#F4CE14] text-5xl">Little Lemon</h1>
        <h3 className="text-4xl text-white">Chicago</h3>
        <p className="max-w-[50%] text-white">
          We are a family owned Mditerranean restaurant, focused on traditional
          recipes served with modern twist.{" "}
        </p>
        <button className="px-5 py-2 bg-[#F4CE14] font-semibold rounded-lg w-[30%] mt-[80px]"> Reserve a Table</button>
      </article>
      <figure className="w-5/12 translate-y-10">
        <img src={heroImg} alt="hero_img" width={350} />
      </figure>
    </section>
  );
};

export default Hero;
