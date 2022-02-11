import { configureStore } from "@reduxjs/toolkit";
import { googleApi } from "../serves/api";
export default configureStore({
    reducer: {
        [googleApi.reducerPath] : googleApi.reducer,
    },
});

