import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
// import {configureStore} from "@reduxjs/toolkit"
import blogReducer from "../features/blogSlice"
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "root",// storage veriler key-value şeklinde saklanır. Buraki key storagedaki keyi temsil ediyor.
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    blog: blogReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);
export default store




// import {configureStore} from "@reduxjs/toolkit"
// import blogReducer from "../features/blogSlice"
// import authReducer from "../features/authSlice"

// const store = configureStore({
//     reducer:{
//         blog:blogReducer,
//         auth:authReducer,
//     }

// })

// export default store;