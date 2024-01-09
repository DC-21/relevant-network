import logo from "../assets/istockphoto-1362381896-612x612.jpg";

const Home = () => {
  return (
    <section className="flex w-full max-w-7xl h-auto py-20 px-4 justify-center items-center">
      <div className="w-full flex gap-4 justify-center items-center text-black">
        <div className="w-1/2 justify-center">
          <h1 className="text-[60px] font-weight: 800 text-[#5355e0]">
            How We Help Women
          </h1>
          <p className="text-[#5e60e0]">
            To support women thereby transforming generations; enabling them to
            live full lives. Through creating a platform; for them to access
            vocational skills training, business opportunities, income
            generating activities allowing them to access; good quality health
            care, shelter, sanitation and education services.
          </p>
          <div className="flex gap-6 mt-6">
            <button className="py-3 px-4 text-white rounded bg-[#5355e0]">
              Donate Now
            </button>
            <button className="bg-[#4d9136] text-white rounded py-3 px-4">
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

export default Home;
