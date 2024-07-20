import { Contexts } from '@/util/Context'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

export default function Choosen() {

  const {t, i18n} = useTranslation('global')
  const {state} = useContext(Contexts)

  return (
    <div className='bg-white mt-[30px]'>
      <div className='w-[90%] m-auto'>
        <h2 className='text-xl font-semibold flex gap-3'>{t("basket.yours")}
        <span className='text-md font-medium text-gray-400'>{state.basket?.length} {t("basket.product")} </span></h2>
      </div>
    </div>
  )
}