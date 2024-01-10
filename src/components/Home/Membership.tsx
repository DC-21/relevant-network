import { colors } from "../../constants/colors";

const Membership = () => {
  return (
    <section className="min-h-screen gap-2 w-full text-center flex flex-col bg-[#ffcc99] bg-opacity-30 items-center justify-center px-4 md:px-12 py-16">
      <h1 className="text-center text-4xl text-gray-700 font-bold">
        Membership
      </h1>
      <p className="md:text-xl text-lg text-gray-600 lg:max-w-xl">
        The women that constitute the board shall be invited onto the board
        through an eligibility criteria of having a working profession, a higher
        education qualification and expertise in a particular field. The initial
        ten shall be invited unto the board with formal letters written to them.
        They shall be responsible for registration process and shall therefore
        contribute the start- up costs of registration.
      </p>
      <div className=" flex items-center justify-center gap-2 w-full my-2">
        <div className=" h-1 bg-gray-400 w-8"></div>
        <div className=" h-3 bg-[#ff6699] w-8"></div>
        <div className=" h-1 bg-gray-400 w-8"></div>
      </div>
      <p>
        The expertise of the Board of trustees invited shall have the following
        key knowledge
      </p>
      <div className=" grid md:grid-cols-3 w-full gap-4 mt-4">
        {knowledge.map((item, i) => (
          <div key={i} className=" flex items-center gap-2 hover:shadow-xl duration-150 rounded-full p-2 shadow-lg bg-white">
            <svg
              fill="none"
              color={colors.pink}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className=" text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Membership;

const knowledge = [
  "Agronomist",
  "Architecture",
  "Accountant",
  "Banking and Finance",
  "Business Management",
  "Economic policy management",
  "Engineering",
  "Development specialist",
  "Integrated Health specialist",
  "Law",
];
