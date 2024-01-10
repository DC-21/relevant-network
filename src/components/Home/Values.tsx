import { Link } from "react-router-dom";

const Values = () => {
  return (
    <section className="min-h-screen gap-2 w-full text-center flex flex-col bg-[#ffcc99] bg-opacity-30 items-center justify-center px-4 md:px-12 py-16">
      <h1 className="text-center text-4xl text-gray-700 font-bold">
        WE <span className="text-[#ff6699]">CAN</span> CHANGE THE WORLD
      </h1>
      <h2 className=" text-2xl underline">Vision</h2>
      <p className="md:text-xl text-lg text-gray-600">
        To improve peoples&#39; lives one at time.
      </p>
      <div className=" flex items-center justify-center gap-2 w-full my-2">
        <div className=" h-2 bg-gray-400 w-8"></div>
        <div className=" h-3 bg-[#ff6699] w-8"></div>
        <div className=" h-2 bg-gray-400 w-8"></div>
      </div>
      <div className="grid lg:grid-cols-5 text-sm md:text-base md:grid-cols-3 mt-4 w-full items-center justify-center gap-6">
        <div className="flex items-center flex-col text-center justify-center md:p-4 shadow-md rounded-xl hover:shadow-xl py-12 duration-200 bg-[#ffcc99] bg-opacity-5">
          <span className=" px-4 py-2 border-[#ff6699] my-2 font-extrabold text-gray-500 rounded-full border-4">
            1
          </span>
          <p className=" text-gray-600">
            Establish a robust social enterprise in agriculture, emphasizing
            high-quality crops and advanced breeding techniques for climate
            adaptation.
          </p>
        </div>
        <div className="flex items-center flex-col text-center justify-center md:p-4 shadow-md rounded-xl hover:shadow-xl py-12 duration-200 bg-[#ffcc99] bg-opacity-5">
          <span className=" px-4 py-2 border-[#ff6699] my-2 font-extrabold text-gray-500 rounded-full border-4">
            2
          </span>
          <p className=" text-gray-600">
            Increase women's active and inclusive wealth creation participation
            by providing opportunities for decent employment and skill
            development.
          </p>
        </div>
        <div className="flex items-center flex-col text-center justify-center md:p-4 shadow-md rounded-xl hover:shadow-xl py-12 duration-200 bg-[#ffcc99] bg-opacity-5">
          <span className=" px-4 py-2 border-[#ff6699] my-2 font-extrabold text-gray-500 rounded-full border-4">
            3
          </span>
          <p className=" text-gray-600">
            Support women's education through comprehensive adult literacy,
            vocational skills training, and accessible primary education.
          </p>
        </div>
        <div className="flex items-center flex-col text-center justify-center md:p-4 shadow-md rounded-xl hover:shadow-xl py-12 duration-200 bg-[#ffcc99] bg-opacity-5">
          <span className=" px-4 py-2 border-[#ff6699] my-2 font-extrabold text-gray-500 rounded-full border-4">
            4
          </span>
          <p className=" text-gray-600">
            Establish a robust social enterprise in agriculture, emphasizing
            high-quality crops and advanced breeding techniques for climate
            adaptation.
          </p>
        </div>
        <div className="flex items-center flex-col text-center justify-center md:p-4 shadow-md rounded-xl hover:shadow-xl py-12 duration-200 bg-[#ffcc99] bg-opacity-5">
          <span className=" px-4 py-2 border-[#ff6699] my-2 font-extrabold text-gray-500 rounded-full border-4">
            5
          </span>
          <p className=" text-gray-600">
            Promote gender equity through programs addressing social justice,
            gender-based violence, and encouraging women's participation.
          </p>
        </div>
      </div>
      <Link to={"/about"}></Link>
    </section>
  );
};

export default Values;
