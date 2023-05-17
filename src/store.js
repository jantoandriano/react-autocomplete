import { configureStore } from "@reduxjs/toolkit";
import selectedPlace from "./features/selected-place/slices"


const store = configureStore({
    reducer: {
       selectedPlace
    },
})

export default store