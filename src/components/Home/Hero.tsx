import bg from "../../assets/homehero.jpg";
const Hero = () => {
  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="min-h-screen bg-black bg-opacity-40 flex gap-4 flex-col items-center justify-center text-center backdrop-blur-[2px]">
        <h1 className=" text-white font-bold text-5xl">How We Help Women</h1>
        <p className="lg:max-w-xl">
          To support women thereby transforming generations; enabling them to
          live full lives. Through creating a platform; for them to access
          vocational skills training, business opportunities, income generating
          activities allowing them to access; good quality health care, shelter,
          sanitation and education services.
        </p>
        <div className="">
          <button className="">Donate Now</button>
          <button className="">Disover +</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
