import { Contexts } from '@/util/Context'
import { product } from '@/util/db'
import { icons } from '@/util/icon'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductInfo() {
    const { id } = useParams()
    const res = product.find(item => item.id == id)
    const { state, dispatch } = useContext(Contexts);

    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decrementQuantity = () => {
      setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1))
    }

    const addToBasketInfo = (item) => {
        const ress = state.basket.some(child => child.id == item.id)

        if(!ress) {
          dispatch({ type: "ADD_BASKET", payload: item });
        }
    };

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

                    <h3 className="text-md text-[22px] font-semibold text-[#1F2026] mb-1">{res.title}</h3>

                    <div>
                        <h2 className='mb-[8px]'>Calculation:</h2>

                        <div className='mb-[25px] border border-[#36364033] w-[120px] h-[40px] rounded-[4px] flex items-center justify-center gap-[17px]'>
                            <button className='text-[20px] text-[#8B8E99]' onClick={decrementQuantity}>-</button>
                            <h2 className='text-[20px] text-[#1F2026]'>{quantity}</h2>
                            <button className='text-[20px] text-[#8B8E99]' onClick={incrementQuantity}>+</button>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-[16px] text-[#1F2026]'>Price:</h2>

                        <div className='flex items-center gap-[20px] mb-[24px]'>
                            <p className="text-xl font-semibold text-[#1F2026]">
                                {`${(res.price * quantity).toFixed(2)} $`}
                            </p>
                            <p className="text-[14px] leading-[18px] font-normal text-[#8B8E99] line-through">
                                {`${(res.oldPrice * quantity).toFixed(2)} $`}
                            </p>
                        </div>
                    </div>

                    <div className="mb-[24px] py-1 px-2 bg-[#FFFF00] text-[14px] leading-[17px] font-medium inline-block rounded-md">
                        {`${((res.price * quantity) / 12).toFixed(2)} usd/month`}
                    </div>

                    <button onClick={() => addToBasketInfo(res)} className='block rounded-[12px] w-[45%] h-[56px] text-[white] bg-violet-900'>Savat O'tish</button>
                </div>
            </div>
        </div>
    )
}