import React from 'react';
import { icons } from '../util/icon.jsx';
import Language from './Language.jsx';
import { useTranslation } from 'react-i18next';

export default function Overview() {
  const { t, i18n } = useTranslation('global');

  return (
    <div className='bg-[#F2F4F7]'>
      <div className='w-[1350px] m-auto flex items-center justify-between py-2 px-[15px]'>
        <div className='flex items-center gap-[23px]'>
          <div className='flex items-center gap-[6px]'>
            <span>{icons.location}</span>
            <p className='text-[14px] leading-[14px] font-normal text-blackMain'>
              {t("overview.city")}
              <span className='font-medium underline cursor-pointer text-blackMain'>{t("overview.region")}</span>
            </p>
          </div>
          <p className='text-[14px] leading-[14px] font-medium cursor-pointer text-blackMain'>
            {t("overview.location")}
          </p>
        </div>
        <p className='text-[#8B8E99] text-[14px] leading-[14px] font-normal'>
          {t("overview.message")}
        </p>
        <div className='flex items-center gap-[26px]'>
          <div className='flex items-center gap-[16px]'>
            <p className='text-[#595B66] text-[14px] leading-[14px] font-medium'>
              {t("overview.faq")}
            </p>
            <p className='text-[#595B66] text-[14px] leading-[14px] font-medium'>
              {t("overview.order")}
            </p>
          </div>
          <Language />
        </div>
      </div>
    </div>
  );
}