import { configureStore } from "@reduxjs/toolkit";

import photoSlice from "./slices/photoSlice";

export const store = configureStore({
    reducer: {
        photoReducer: photoSlice
    }
});

