export const INITIAL_STATE = {
    basket: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_BASKET":
            return {
                basket: [...state.basket, action.payload]
            }
        case "REMOVE_BASKET":
            return {
                basket: state.basket.filter((element) => element.id !== action.payload)
            }
        case "CHANGE_QTY":
            return {
                basket: state.basket.map((element) =>
                    element.id === action.payload.id ? { ...element, qty: action.payload.count } : element
                )
            }
        default:
            return state;
    }
}

export default reducer;