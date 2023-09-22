import {createSlice} from "@reduxjs/toolkit"

const blogSlice = createSlice({
    name: "blog",

    initialState:{
        loading:false,
        error:false,
        blogs:[],
        categories:[],
        likes:[],
        details:{},
        myUser:[]
    },
    reducers:{
        fetchStart: state => {
            state.loading = true;
            state.error = false;
        },
        getSuccess:(state,{payload: {data,url}}) =>{
            state.loading = false;
            state[url] = data;
        },
        getCategorySuccess:(state,{payload:{data,url}}) => {
            state.loading = false;
            state[url] = data;
        },
        getDetailSuccess:(state,{payload}) => {
            state.loading = false;
            state.details = payload;
        },
        getUserSuccess:(state,{payload}) => {
            state.loading = false;
            state.myUser = payload;
        },
        fetchFail: state => {
            state.loading = false;
            state.error = true;
          },
    }

})

export const { fetchStart, getSuccess, fetchFail, getCategorySuccess,getDetailSuccess,getUserSuccess } = blogSlice.actions

export default blogSlice.reducer;