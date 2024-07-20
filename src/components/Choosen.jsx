import { Contexts } from "@/util/Context";
import { icons } from "@/util/icon";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Choosen() {
  const { t, i18n } = useTranslation("global");
  const { state, dispatch } = useContext(Contexts);
  const navigate = useNavigate();

  const incrementQuantity = (id) => {
    const item = state.basket.find((item) => item.id === id);
    if (item) {
      dispatch({
        type: "CHANGE_QTY",
        payload: { id, count: item.qty + 1 },
      });
    }
  };

  const decrementQuantity = (id) => {
    const item = state.basket.find((item) => item.id === id);
    if (item && item.qty > 1) {
      dispatch({
        type: "CHANGE_QTY",
        payload: { id, count: item.qty - 1 },
      });
    }
  };

  const calculateTotal = () => {
    return state.basket.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  };

  const removeBasket = (id) => {
    dispatch({ type: "REMOVE_BASKET", payload: id });
  };

  useEffect(() => {
    // Initialize quantities if not already set
    state.basket.forEach((item) => {
      if (!item.qty) {
        dispatch({
          type: "CHANGE_QTY",
          payload: { id: item.id, count: 1 },
        });
      }
    });
  }, [state.basket, dispatch]);

  return (
    <div className="bg-white mt-[20px]">
      <div className="w-[90%] m-auto">
        {state.basket.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold flex gap-3 mb-5">
              {t("basket.yours")}
              <span className="text-md font-medium text-gray-400">
                {state.basket?.length} {t("basket.product")}{" "}
              </span>
            </h2>

            <div className="flex gap-[20px]">
              <div className="w-3/4 flex flex-col gap-[10px]">
                {state.basket?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-10 justify-between border border-gray-500 p-5 rounded-md"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        onClick={() => navigate(`/productInfo/${item.id}`)}
                        className="w-[150px] h-[150px] cursor-pointer object-contain"
                        src={item.image}
                        alt=""
                      />

                      <h2 className="text-xl font-semibold">{item.title}</h2>
                    </div>

                    <div className="flex items-center gap-10">
                      <div className="mb-[25px] border border-[#36364033] w-[120px] h-[40px] rounded-[4px] flex items-center justify-center gap-[17px]">
                        <button
                          className="text-[20px] text-[#8B8E99]"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <h2 className="text-[20px] text-[#1F2026]">
                          {item.qty}
                        </h2>
                        <button
                          className="text-[20px] text-[#8B8E99]"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <div className="flex flex-col items-end gap-[50px]">
                        <span
                          className="cursor-pointer"
                          onClick={() => removeBasket(item.id)}
                        >
                          {icons.delete}
                        </span>

                        <div className="w-[100px]">
                          <p className="text-xl text-end font-semibold text-[#1F2026]">
                            {`${item.price} $`}
                          </p>
                          <p className="text-[14px] text-end leading-[18px] font-normal text-[#8B8E99] line-through">
                            {`${item.oldPrice} $`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-1/4 h-[150px] border border-gray-500 flex-col flex justify-between p-5 rounded-md">
                <h2 className="text-xl font-semibold">Buyurtmangiz</h2>

                <div>
                  <p className="text-lg font-medium">Jami: </p>
                  <p className="text-md font-normal">{`${calculateTotal().toFixed(2)} $`}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-[100px]">
            <h2 className="text-2xl font-bold text-black text-center">
              Hozircha Savat Bo'sh
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}