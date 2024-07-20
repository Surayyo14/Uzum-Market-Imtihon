import { product } from '@/util/db'
import { icons } from '@/util/icon'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductInfo() {

    const {id} = useParams()

    const res = product.find(item => item.id == id)

  return (
    <div className='bg-white mt-[20px]'>
      <div className='w-[90%] m-auto flex items-center gap-[100px] justify-between'>
        <img className='w-1/4' src={res.image} alt="" />

        <div className='w-3/4'>
            <div className="flex items-center gap-1 mb-2">
                <span className="translate-y-[-1px]">{icons.star}</span>
                <span className="text-sm text-[#8B8E99] font-light">
                  {res.rating.rate}
                </span>
                <span className="text-sm text-[#8B8E99] font-light">
                  {`(${res.ratingVoice} sharh)`}
                </span>
            </div>

            <h3 className="text-md font-semibold text-[#1F2026] mb-1">{res.title}</h3>

            <div>
                <h2>Calculation:</h2>

                <div>
                    <button>+</button>
                    <h2>1</h2>
                    <button>-</button>
                </div>
            </div>

            <div>
                <h2>Price</h2>

                <div>
                  <p className="text-xl font-semibold text-[#1F2026]">
                    {`${res.price} $`}
                  </p>
                  <p className="text-[14px] leading-[18px] font-normal text-[#8B8E99] line-through">
                    {`${res.oldPrice} $`}
                  </p>
                </div>
            </div>

            <div className="py-1 px-2 bg-[#FFFF00] text-[14px] leading-[17px] font-medium inline-block rounded-md mb-4">
                {`${(res.price / 12).toFixed(2)} usd/month`}
            </div>

            <button>Savat O'tish</button>

        </div>
      </div>
    </div>
  )
}