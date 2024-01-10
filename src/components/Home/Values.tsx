const Values = () => {
  return (
    <section className="min-h-screen gap-2 w-full text-center flex flex-col bg-[#ffcc99] bg-opacity-30 px-4 md:px-12 py-16">
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
      <div className="grid lg:grid-cols-5 md:grid-cols-3 mt-4 w-full items-center justify-center gap-4">
        <div className="flex items-center text-center justify-center p-4 border shadow-md">
          <p>
            Establish a robust social enterprise in agriculture, emphasizing
            high-quality crops and advanced breeding techniques for climate
            adaptation.
          </p>
        </div>
        <div className="flex items-center justify-center p-4 border shadow-md">
          <p>
            Increase women's wealth creation participation by providing
            opportunities for decent employment.
          </p>
        </div>
        <div className="flex items-center text-center justify-center p-4 border shadow-md">
          <p>
            Support women's education through adult literacy, vocational skills
            training, and primary education.
          </p>
        </div>
        <div className="flex items-center text-center justify-center p-4 border shadow-md">
          <p>
            Establish a robust social enterprise in agriculture, emphasizing
            high-quality crops and advanced breeding techniques for climate
            adaptation.
          </p>
        </div>
        <div className="flex items-center text-center justify-center p-4 border shadow-md">
          <p>
            Promote gender equity through programs addressing social justice,
            gender-based violence, and encouraging women's active participation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
