import logo from "../../assets/gail.avif";

const Hero = () => {
  return (
    <section className="">
      <div className="">
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
      <div className="">
        <img
          className="bg-[#4d9136] h-auto w-full object-cover rounded"
          src={logo}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
