import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Main() {

  const itemList = ['all', 'electronic', 'technic', 'clothes',, 'shoes', 'item', 'beuty', 'healthy', 'homeitem']

  const {t, i18n} = useTranslation('global')

  return (
    <div className='bg-white pb-[30px]'>
      <div className='w-[90%] m-auto flex items-center justify-between px-5'>
        {
          itemList.map(item => {
            return (
              <p className='text-[15px] '>{t(`main.${item}`)}</p>
            )
          })
        }
      </div>
    </div>
  )
}