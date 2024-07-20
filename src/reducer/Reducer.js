export const INITIAL_STATE = {
    basket: JSON.parse(localStorage.getItem('basket')) || []
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_BASKET":
            const updatedBasketAdd = [...state.basket, action.payload];
            localStorage.setItem('basket', JSON.stringify(updatedBasketAdd));
            return { basket: updatedBasketAdd };
        case "REMOVE_BASKET":
            const updatedBasketRemove = state.basket.filter((element) => element.id !== action.payload);
            localStorage.setItem('basket', JSON.stringify(updatedBasketRemove));
            return { basket: updatedBasketRemove };
        case "CHANGE_QTY":
            const updatedBasketQty = state.basket.map((element) =>
                element.id === action.payload.id ? { ...element, qty: action.payload.count } : element
            );
            localStorage.setItem('basket', JSON.stringify(updatedBasketQty));
            return { basket: updatedBasketQty };
        default:
            return state;
    }
};

export default reducer;