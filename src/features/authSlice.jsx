import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:"auth",

    initialState:{
      currentUser:null,
      loading:false,
      error:false,
      token:null,  
    },
    reducers:{
        fetchStart: state =>{
          state.loading = true;
          state.error = false;
        },
        loginSuccess:(state,{payload}) => {
         state.loading = false;
         state.currentUser = payload?.user?.username ;
         state.token = payload?.key
        },
        logoutSuccess:(state) => {
          state.loading = false;
          state.currentUser = null ;
          state.token = null;
         },
        registerSuccess:(state,{payload}) =>{
          state.loading = false;
          state.currentUser= payload?.username;
          state.token = payload?.token;
        },
        fetchFail: state =>{
            state.loading = false;
            state.error = true;
          },
    },
});

export const {
    fetchStart,
    registerSuccess,
    fetchFail,
    loginSuccess,
    logoutSuccess
} = authSlice.actions

export default authSlice.reducer