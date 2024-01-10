import logo from "../../assets/gail.avif";

const Hero = () => {
  return (
    <section className="">
      <div className="">
        <div className="w-1/2 justify-center">
          <h1 className="text-[60px] font-weight: 800 text-[#353935]">
            How We Help Women
          </h1>
          <p className="text-[#353935] text-lg">
            To support women thereby transforming generations; enabling them to
            live full lives. Through creating a platform; for them to access
            vocational skills training, business opportunities, income
            generating activities allowing them to access; good quality health
            care, shelter, sanitation and education services.
          </p>
          <div className="flex gap-6 mt-6">
            <button className="py-3 px-4 text-white rounded bg-[#353935] hover:bg-[#495749]">
              Donate Now
            </button>
            <button className="bg-[#4d9136] hover:bg-[#64be46] text-white rounded py-3 px-4">
              Disover +
            </button>
          </div>
        </div>
        <div className="w-1/2 justify-end">
          <img
            className="bg-[#4d9136] h-auto w-full object-cover rounded"
            src={logo}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
