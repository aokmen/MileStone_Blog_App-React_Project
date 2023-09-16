import React from 'react'
import {useDispatch} from 'react-redux'
import { fetchFail, fetchStart, getSuccess } from '../features/blogSlice';
import axios from "axios"

const useBlogCalls = () => {

     const dispatch = useDispatch()
     const BASE_URL = process.env.REACT_APP_BASE_URL;

     const getBlogData = async(url) => {
        dispatch(fetchStart())
        try {
           
            const {data} = await axios(`${BASE_URL}api/${url}/`)
            console.log("getBlogData",data);
            dispatch(getSuccess({data,url}))
        } catch (error) {
            dispatch(fetchFail())
        }
     }
  return (
    getBlogData
  )
}

export default useBlogCalls