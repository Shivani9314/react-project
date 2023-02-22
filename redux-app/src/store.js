import { configureStore } from "@reduxjs/toolkit";
import noteslice from "./redux-Slices/slices/noteslice";
import loginSlice from "./redux-Slices/slices/loginSlice";
import cartSlice from "./redux-Slices/Product/cartSlice";
import productSlice from "./redux-Slices/Product/productSlice";

export default configureStore({
    reducer :{
        // notesReducer: noteslice,
        // loginReducer : loginSlice,
        productReducer : productSlice,
        cartReducer: cartSlice,
    }
})




