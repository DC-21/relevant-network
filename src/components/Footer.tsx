import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" flex flex-col w-full px-4 md:px-12 py-12">
      <div className=" flex md:flex-row gap-8 justify-between flex-col items-center">
        <Link to={"/"} className="flex gap-2">
          <img src={logo} loading="lazy" alt="logo" className=" h-12" />
          <div className=" flex flex-col">
            <span className=" font-bold">RELEVANT NETWORK</span>
            <span className=" text-sm text-gray-500">Supporting the women</span>
          </div>
        </Link>
        <ul className=" text-center flex flex-col md:flex-row items-center gap-4">
          <li>
            <Link
              to={"/"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to={"/services"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to={"/blog"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              to={"/services"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              CONTACTS
            </Link>
          </li>
        </ul>
        <ul className=" flex items-center gap-4">
          <li>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              <path
                fill="currentColor"
                d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
              />
            </svg>
          </li>
          <li>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
            </svg>
          </li>
          <li>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
            </svg>
          </li>
          <li>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1.3em"
              width="1.3em"
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </li>
        </ul>
      </div>
      <div className=" border-t w-full mt-4 flex pt-10 items-center justify-center">
        <span>©Copyright 2024-Relevant Network</span>
      </div>
    </footer>
  );
};

export default Footer;
