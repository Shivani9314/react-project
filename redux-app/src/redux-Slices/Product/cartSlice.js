import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name : 'cartSlice',

    initialState : {
        cartValue :[]
    },

    reducers: {
        addToCart : (state,action) => {
            const present = state.cartValue.find((item) => action.payload.id === item.id);

            if(present){
                present.quantity += 1;
                present.price += action.payload.price;
                return;
            }

            state.cartValue.push({
                id: action.payload.id,
                quantity: 1,
                price: action.payload.price
            });

        }, 
        removeToCart: (state, action) => {

            const cart = state.cartValue.find((item) => item.id === action.payload.id);

            if(cart){
                cart.quantity -= 1;
                cart.price -= action.payload.price;
                if(cart.quantity === 0){
                    const items = state.cartValue.filter((item) => item.id !== action.payload.id)
                    state.cartValue = items;

                }
            }
        },
        removeCart: (state, action) => {
            state.cartValue = state.cartValue.filter((item) => item.id !== action.payload.id);

        }
    }
})


export default cartSlice.reducer;
export const {addToCart,removeCart,removeToCart} = cartSlice.actions;
