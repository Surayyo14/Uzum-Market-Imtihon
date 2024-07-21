
import React, { useContext } from "react";
import LinkImg from "../assets/img/link.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Contexts } from "@/util/Context";

export default function Navbar() {
  const { t } = useTranslation("global");
  const { state } = useContext(Contexts);

  return (
    <div className="bg-white pt-[18px] mb-[30px]">
      <div className="w-[90%] m-auto flex items-center justify-between flex-wrap gap-[16px]">
        <a href="/">
          <img
            src={LinkImg}
            alt=""
            
          />
        </a>

        <div className="flex items-center flex-wrap gap-4 md:gap-2">
          <button className="flex items-center gap-1 bg-[#F0F0FF] rounded-sm px-5 py-[11px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#7000FF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12h16M4 6h16M4 18h16"
              />
            </svg>
            <span className="text-[#7000FF] text-[14px] leading-[18px] font-medium tracking-[0.08px]">
              {t("navbar.modal")}
            </span>
          </button>

          <label className="w-full sm:w-[300px] md:w-[400px] flex items-center h-[40px] rounded-[4px] border border-[#36364033]">
            <input
              className="pl-[10px] border-none text-[14px] outline-none font-normal w-full h-[40px] bg-transparent"
              type="text"
              placeholder={t("navbar.input")}
            />
            <button className="w-[55px] bg-gray-100 h-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                />
              </svg>
            </button>
          </label>
        </div>

        <div className="flex items-center flex-wrap gap-4 md:gap-2">
          <Link to="/profile" className="flex items-center gap-2 md:mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              className="text-black"
            >
              <path
                fill="black"
                fillRule="evenodd"
                d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339c-1.974 0-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601"
                clipRule="evenodd"
              />
            </svg>
            <span>{t("navbar.enter")}</span>
          </Link>

          <Link to="/liked" className="flex items-center gap-2 md:mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 256 256"
              className="text-black"
            >
              <path
                fill="black"
                d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
              />
            </svg>
            <span>{t("navbar.liked")}</span>
          </Link>

          <Link to="/saved" className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 6.5C9 4.88779 10.2402 3.5 12 3.5C13.7598 3.5 15 4.88779 15 6.5V7.5H9V6.5ZM7.5 9V11.5H9V9H15V11.5H16.5V9H18.5V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V9H7.5ZM7.5 7.5V6.5C7.5 4.11221 9.35984 2 12 2C14.6402 2 16.5 4.11221 16.5 6.5V7.5H19.25H20V8.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V8.25V7.5H4.75H7.5Z"
              ></path>
            </svg>
            <span>{t("navbar.savat")}</span>
            <span className="font-mono text-lg text-white px-2 rounded-full bg-[#7002FF]">
              {state.basket?.length || 0}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
