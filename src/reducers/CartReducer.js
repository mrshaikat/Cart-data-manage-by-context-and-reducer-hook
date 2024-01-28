const initialState = {
    cartData: []
}

const cartReducer= (state, action) => {

    switch (action.type) {
        case "addToCart":
            return { 
                 cartData: [...state.cartData, action.payload]
        }
        break;

        case "removeFromCart":
            return {
                cartData: state.cartData.filter(item => item.id !== action.payload.id)
            }
        break;
    
        default:
          return state;
    }

}

export { cartReducer, initialState };

