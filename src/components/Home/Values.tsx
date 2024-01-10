const Values = () => {
  return (
    <section className="min-h-screen gap-2 w-full text-center flex flex-col bg-[#ffcc99] bg-opacity-30 px-4 md:px-12 py-16">
      <h1 className="text-center text-4xl text-gray-700 font-bold">
        WE <span className="text-[#ff6699]">CAN</span> CHANGE THE WORLD
      </h1>
      <h2 className=" text-2xl underline">Vision</h2>
      <p className="md:text-xl text-lg text-gray-600">To improve peoples&#39; lives one at time.</p>
      <div className=" flex items-center justify-center gap-2 w-full my-2">
        <div className=" h-2 bg-gray-400 w-8"></div>
        <div className=" h-3 bg-[#ff6699] w-8"></div>
        <div className=" h-2 bg-gray-400 w-8"></div>
      </div>
      <div className="grid md:grid-cols-4 mt-4 grid-cols-1 w-full items-center justify-center gap-4">
        <div className="flex items-center justify-center p-4 border shadow-md">
          <p>Education Support</p>
        </div>
        <div className="flex items-center justify-center p-4 border shadow-md">
          <p>Skills Training</p>
        </div>
        <div className="flex items-center justify-center p-4 border shadow-md">
          <p>Food Security</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
