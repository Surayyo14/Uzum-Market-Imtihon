import reducer, { INITIAL_STATE } from "@/reducer/Reducer";
import { Contexts } from "@/util/Context";
import { product } from "@/util/db";
import { icons } from "@/util/icon";
import React, { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const { dispatch } = useContext(Contexts);
  const [likedProducts, setLikedProducts] = useState(
    product.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );

  const handleLikeToggle = (id) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [id]: !prevLikedProducts[id],
    }));
  };

  const addToBasket = (item) => {
    dispatch({ type: "ADD_BASKET", payload: item });
  };

  const navigate = useNavigate();

  return (
    <div className="bg-white mt-[30px]">
      <div className="w-[90%] m-auto grid grid-cols-5 gap-5">
        {product.map((item) => (
          <div className="min-w-[150px] max-w-full border border-gray-300 p-3 rounded-lg relative cursor-pointer hover:border-gray-700 delay-75 duration-150"
            key={item.id}
          >
            <div>
              <img onClick={() => navigate(`/productInfo/${item.id}`)}
                className="max-w-full h-[200px] scale-75 hover:scale-90 object-contain delay-75 duration-150"
                src={item.image}
                alt={item.category}
              />
              <h3 className="text-md font-semibold text-[#1F2026] mb-1">
                {item.title?.slice(0, 20)}...
              </h3>
              <div className="flex items-center gap-1 mb-2">
                <span className="translate-y-[-1px]">{icons.star}</span>
                <span className="text-sm text-[#8B8E99] font-light">
                  {item.rating.rate}
                </span>
                <span className="text-sm text-[#8B8E99] font-light">
                  {`(${item.ratingVoice} sharh)`}
                </span>
              </div>
              <div className="py-1 px-2 bg-[#FFFF00] text-[14px] leading-[17px] font-medium inline-block rounded-md mb-4">
                {`${(item.price / 12).toFixed(2)} usd/month`}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[14px] leading-[18px] font-normal text-[#8B8E99] line-through">
                    {`${item.oldPrice} $`}
                  </p>
                  <p className="text-[#1F2026] text-[16px] leading-[20px] font-medium">
                    {`${item.price} $`}
                  </p>
                </div>
                <button onClick={() => addToBasket(item)}>
                  {icons.basket}
                </button>
              </div>
            </div>
            <div className="absolute top-3 right-3">
              {likedProducts[item.id] ? (
                <svg
                  onClick={() => handleLikeToggle(item.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#db0a28"
                    d="M64.8 120.71c3.68 0 32.11-24.18 48.7-44.07c15.96-19.14 10.2-41.74 6.69-48.03c-4.15-7.43-56.94 17.01-56.94 17.01S14.07 17.99 10.39 23.99C5.4 32.13-1.59 53.54 12.52 73.45C27.5 94.6 60.85 120.71 64.8 120.71"
                  />
                  <path
                    fill="#ff262e"
                    d="M64.55 114.2s52.26-38.68 56.75-62.3c4.25-22.37-4.45-33.22-15.16-38.45C78.99.19 65.29 26.21 64 26.21S49.95.14 23.7 11.42C9.24 17.63 3.18 34.53 8.91 53.57c8.41 27.94 55.64 60.63 55.64 60.63"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => handleLikeToggle(item.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                  />
                </svg>
              )}
            </div>
            <button className="text-[12px] leading-[14px] font-medium py-1 px-2 text-white bg-blue-700 rounded-md absolute top-3 left-3">
              {item.imgSubtitle}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}