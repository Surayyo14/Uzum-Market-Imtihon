

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Main() {
  const itemList = ['all', 'electronic', 'technic', 'clothes', 'shoes', 'item', 'beauty', 'healthy', 'homeitem'];
  const { t } = useTranslation('global');

  return (
    <div className='bg-white pb-[30px]'>
      <div className='w-[90%] m-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
        {itemList.map((item, index) => (
          <p key={index} className='text-[15px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>
            {t(`main.${item}`)}
          </p>
        ))}
      </div>
    </div>
  );
}
