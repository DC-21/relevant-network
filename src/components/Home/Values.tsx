import bg from "../../assets/her03.jpg";
const Values = () => {
  return (
    <div className="min-h-screen px-4 md:px-12 py-16 gap-4 items-center justify-center grid md:grid-cols-2 w-full">
      <div>
        <img
          src={bg}
          alt="woman"
          loading="lazy"
          className=" w-full object-cover object-center"
        />
      </div>
      <div className=" flex flex-col items-center md:items-start gap-2 md:justify-start justify-center">
        <h1 className="text-center md:text-left text-4xl text-gray-700 font-bold">
          LEGAL STRUCTURE
        </h1>
        <p className="md:text-xl text-lg md:text-left text-center text-gray-600">
          Relevant shall be a legally registered as a Non-Governmental
          Organization (NGO) according to the laws of Zambia.
        </p>
        <div className=" flex items-center justify-center md:justify-start gap-2 w-full my-2">
          <div className=" h-3 bg-[#ff6699] w-8"></div>
          <div className=" h-1 bg-gray-400 w-8"></div>
          <div className=" h-1 bg-gray-400 w-8"></div>
        </div>
        <p className=" underline text-xl">Core values</p>
        <ul className=" grid grid-cols-2 gap-4 md:text-xl w-full">
          <li className=" p-2 rounded-full flex items-center border shadow-sm gap-2">
            <span>
              <svg color="#ff6600" viewBox="0 0 24 24" height="1em" width="1em">
                <path fill="currentColor" d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            Creativity
          </li>
          <li className=" p-2 rounded-full flex items-center border shadow-sm gap-2">
            <span>
              <svg color="#ff6600" viewBox="0 0 24 24" height="1em" width="1em">
                <path fill="currentColor" d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            Empowerment
          </li>
          <li className=" p-2 rounded-full flex items-center border shadow-sm gap-2">
            <span>
              <svg color="#ff6600" viewBox="0 0 24 24" height="1em" width="1em">
                <path fill="currentColor" d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            Excellence
          </li>
          <li className=" p-2 rounded-full flex items-center border shadow-sm gap-2">
            <span>
              <svg color="#ff6600" viewBox="0 0 24 24" height="1em" width="1em">
                <path fill="currentColor" d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            Integrity
          </li>
          <li className=" p-2 rounded-full flex items-center border shadow-sm gap-2">
            <span>
              <svg color="#ff6600" viewBox="0 0 24 24" height="1em" width="1em">
                <path fill="currentColor" d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            Innovation
          </li>
          <li className=" p-2 rounded-full flex items-center border shadow-sm gap-2">
            <span>
              <svg color="#ff6600" viewBox="0 0 24 24" height="1em" width="1em">
                <path fill="currentColor" d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>{" "}
            Sustainability
          </li>
        </ul>
        <button className=" rounded-2xl my-2 bg-[#ff6600] hover:bg-[#ff8000] text-white hover:scale-105 active:scale-95 duration-150 p-4">
          Join Us Now
        </button>
      </div>
    </div>
  );
};

export default Values;
