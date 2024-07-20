import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t, i18n } = useTranslation('global');

  return (
    <div>
      <div className="header_top_links mt-10 grid grid-cols-4 pb-[73px] w-[90%] m-auto border-b border-[#36364033]">
        <div>
          <h3 className="mb-5 font-bold text-[16px]">{t("footer.about")}</h3>
          <a href="https://uzum.uz/uz/about/delivery-points" className="text-[#8B8E99]">
          {t("overview.location")}
          </a>
          <a href="https://uzum.uz/uz/about/careers" className="mt-3 block text-[#8B8E99]">
            {t("footer.vacancy")}
          </a>
        </div>
        <div>
          <h3 className="mb-5 font-bold text-[16px]">{t("footer.user")}</h3>
          <a href="tel:+998781501115" className="text-[#8B8E99]">
          {t("footer.contact")}
          </a>
          <a href="https://uzum.uz/uz/faq" className="mt-3 block text-[#8B8E99]">
          {t("overview.faq")}
          </a>
        </div>
        <div>
          <h3 className="mb-5 font-bold text-[16px]">{t("footer.business")}</h3>
          <a href="https://seller.uzum.uz/" className="text-[#8B8E99]">
          {t("footer.buyin")}
          </a>
          <a href="https://seller.uzum.uz/seller/signin" className="mt-3 block text-[#8B8E99]">
          {t("footer.cabinet")}
          </a>
        </div>
        <div>
          <h3 className="mb-5 font-bold text-[16px]">{t("footer.download")}</h3>
          <div className="flex items-center gap-3">
            <button>
              <a href="https://apps.apple.com/ru/app/uzum-market-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056">
                AppStore
              </a>
            </button>
            <button className="flex items-center gap-2 ml-[24px]">
              <a className="flex items-center gap-2" href="https://play.google.com/store/apps/details?id=uz.uzum.app">
                Google Play
              </a>
            </button>
          </div>
          <h3 className="mb-5 font-bold text-[16px] mt-[32px]">{t("footer.media")}</h3>
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com/uzum.market/">
              <svg data-v-438291e5="" width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="ui-icon">
                <g clipPath="url(#clip0_883_567)">
                  <path d="M24 0c20 0 24 4 24 24s-4 24-24 24S0 44 0 24 4 0 24 0Z" fill="url(#paint0_linear_883_567)"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 12.522c3.738 0 4.18.015 5.657.082 1.365.062 2.106.29 2.6.482.653.254 1.12.557 1.61 1.047.49.49.793.956 1.047 1.61.191.493.42 1.235.481 2.6.068 1.476.082 1.918.082 5.657 0 3.738-.014 4.18-.082 5.657-.062 1.365-.29 2.106-.482 2.6a4.341 4.341 0 0 1-1.046 1.61c-.49.49-.957.793-1.61 1.047-.494.191-1.235.42-2.6.481-1.476.068-1.919.082-5.657.082-3.739 0-4.181-.014-5.657-.082-1.365-.062-2.107-.29-2.6-.482a4.342 4.342 0 0 1-1.61-1.046 4.329 4.329 0 0 1-1.047-1.61c-.192-.494-.42-1.235-.482-2.6-.067-1.476-.082-1.919-.082-5.657 0-3.739.015-4.181.082-5.657.062-1.365.29-2.107.482-2.6a4.343 4.343 0 0 1 1.047-1.61 4.33 4.33 0 0 1 1.61-1.047c.493-.192 1.235-.42 2.6-.482 1.476-.067 1.918-.082 5.657-.082ZM24 10c-3.802 0-4.28.016-5.773.085-1.49.067-2.507.304-3.398.65a6.857 6.857 0 0 0-2.48 1.615 6.858 6.858 0 0 0-1.614 2.48c-.346.89-.583 1.908-.65 3.397C10.015 19.721 10 20.197 10 24c0 3.802.016 4.279.085 5.772.067 1.49.304 2.507.65 3.398.358.921.837 1.702 1.615 2.48a6.862 6.862 0 0 0 2.48 1.615c.89.346 1.908.583 3.398.65 1.493.069 1.97.085 5.772.085 3.802 0 4.28-.016 5.773-.084 1.49-.068 2.508-.305 3.398-.651a6.857 6.857 0 0 0 2.48-1.615 6.86 6.86 0 0 0 1.614-2.48c.346-.89.583-1.908.651-3.398.068-1.493.085-1.97.085-5.772 0-3.802-.017-4.28-.085-5.773-.068-1.49-.304-2.508-.65-3.398a6.855 6.855 0 0 0-1.616-2.48 6.86 6.86 0 0 0-2.48-1.614c-.89-.346-1.908-.583-3.398-.65C28.279 10.015 27.802 10 24 10Zm0 6.81a7.189 7.189 0 1 0 0 14.378 7.189 7.189 0 0 0 0-14.377Zm0 11.856a4.666 4.666 0 1 1 0-9.333 4.666 4.666 0 0 1 0 9.333Zm9.153-12.14a1.68 1.68 0 1 1-3.36 0 1.68 1.68 0 0 1 3.36 0Z" fill="#fff"></path>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_883_567" x1="42.81" y1="5.656" x2="5.044" y2="42.485" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#BA00B2"></stop>
                    <stop offset=".5" stopColor="#F40000"></stop>
                    <stop offset="1" stopColor="#FFAC00"></stop>
                  </linearGradient>
                  <clipPath id="clip0_883_567">
                    <path fill="#fff" d="M0 0h48v48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://t.me/uzum_market">
              <svg data-v-438291e5="" width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="ui-icon">
                <path d="M24 0C37.255 0 48 10.745 48 24c0 13.256-10.745 24-24 24C10.744 48 0 37.256 0 24 0 10.745 10.744 0 24 0Z" fill="#37AEE2"></path>
                <path d="M36.453 12.87c.331-.138.68-.228 1.027-.265a1.804 1.804 0 0 1 1.027.169c.285.153.523.379.692.657.168.278.26.598.268.926a2.036 2.036 0 0 1-.078.56c-.053.216-.113.429-.183.64-.416 1.325-1.76 8.276-2.487 11.668-.31 1.474-.918 2.055-1.507 2.107-1.278.118-2.244-.852-3.48-1.666-1.933-1.249-3.025-2.04-4.906-3.249-2.177-1.332-.764-2.064.473-3.272.324-.312 5.94-5.444 6.042-5.887.013-.056.026-.263-.098-.37-.123-.106-.31-.07-.446-.042-.19.04-3.21 2.047-9.058 6.019-.857.573-1.623.841-2.297.805-.754-.04-2.21-.43-3.289-.785-1.32-.42-2.374-.64-2.282-1.355.046-.368.548-.746 1.51-1.135 5.993-2.461 10.065-4.126 12.215-4.993" fill="#fff"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}