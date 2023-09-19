import {configureStore} from "@reduxjs/toolkit"
import blogReducer from "../features/blogSlice"
import authReducer from "../features/authSlice"

const store = configureStore({
    reducer:{
        blog:blogReducer,
        auth:authReducer,
    }

})

export default store;