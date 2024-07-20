export const INTIAL_STATE = {
    basket: []
}



const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_BASKET":
            return {
                basket: [...state.basket, action.payload]
            }
        case "REMOVE_BASKET":
            return {
                basket: state.basket.filter((element, value) => element.data.id !== action.payload)
            }
        case "CHANGE_QTY":
            return {
                basket: state.basket.filter((element, value) => element.data.id === action.payload.id ? element.qty = action.payload.count : action.payload.count
                )
            }
            
        default: return state;
    }
}

export default reducer