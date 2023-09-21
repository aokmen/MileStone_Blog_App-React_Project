import {createSlice} from "@reduxjs/toolkit"

const blogSlice = createSlice({
    name: "blog",

    initialState:{
        loading:false,
        error:false,
        blogs:[],
        categories:[],
        likes:[],
        comments:[],
        details:{}
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
        getCommentSuccess:(state,{payload}) => {
            state.loading = false;
            state.comments = payload;
        },
        fetchFail: state => {
            state.loading = false;
            state.error = true;
          },
    }

})

export const { fetchStart, getSuccess, fetchFail, getCategorySuccess,getDetailSuccess,getCommentSuccess } = blogSlice.actions

export default blogSlice.reducer;