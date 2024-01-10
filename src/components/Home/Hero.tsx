import bg from "../../assets/homehero.jpg";
const Hero = () => {
  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full bg-cover bg-center bg-no-repeat  text-white"
    >
      <div className="min-h-screen bg-black bg-opacity-40 flex gap-4 flex-col px-4 md:px-10 items-center justify-center text-center backdrop-blur-[2px]">
        <h1 className="font-bold text-5xl">How We Help Women</h1>
        <p className="lg:max-w-xl md:text-xl text-lg">
          To support women thereby transforming generations; enabling them to
          live full lives. Through creating a platform; for them to access
          vocational skills training, business opportunities, income generating
          activities allowing them to access; good quality health care, shelter,
          sanitation and education services.
        </p>
        <div className="flex gap-4 items-center">
          <button className="">Donate Now</button>
          <button className="">Disover +</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
