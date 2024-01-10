import bg from "../../assets/homehero.jpg";
const Hero = () => {
  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="min-h-screen bg-[#ff6600] bg-opacity-50">
        <h1 className="">How We Help Women</h1>
        <p className="">
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
