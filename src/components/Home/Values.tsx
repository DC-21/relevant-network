const Values = () => {
  return (
    <section className="min-h-screen gap-2 w-full text-center flex flex-col bg-[#ffcc99] bg-opacity-30 px-4 md:px-12 py-16">
      <h1 className="text-center text-4xl font-bold">
        WE <span className="text-[#ff6699]">CAN</span> CHANGE THE WORLD
      </h1>
      <h2 className=" text-2xl underline">Vision</h2>
      <p>The vision is to improve peoples&#39; lives one at time.</p>
      <div className=" flex items-center justify-center gap-2 w-full">
        <div className=" h-2 bg-gray-400 w-8"></div>
        <div className=" h-2 bg-[#ff6699] w-8"></div>
        <div className=" h-2 bg-gray-400 w-8"></div>
      </div>
      <div className="grid md:grid-cols-4 mt-4 grid-cols-1 w-full items-center justify-center gap-4">
        <div className="">
          <p>Education Support</p>
        </div>
        <div className="">
          <p>Skills Training</p>
        </div>
        <div className="">
          <p>Food Security</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
