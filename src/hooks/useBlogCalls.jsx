import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchFail, fetchStart, getCategorySuccess, getLikeSuccess, getSuccess } from '../features/blogSlice';
import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCalls = () => {

     const dispatch = useDispatch()
     const BASE_URL = process.env.REACT_APP_BASE_URL;
     const {token} = useSelector(state=>state.auth)
     /* -------------------------------------------------------------------------- */
     /*                                 getBlogData                                */
     /* -------------------------------------------------------------------------- */
     
     const getBlogData = async(url) => {
        dispatch(fetchStart())
        try {
           
            const {data} = await axios(`${BASE_URL}api/${url}/`)
            dispatch(getSuccess({data,url}))
        } catch (error) {
            dispatch(fetchFail())
        }
     }

     /* -------------------------------------------------------------------------- */
     /*                                postBlogData                                */
     /* -------------------------------------------------------------------------- */

     const postBlogData = async(url,info) => {
      dispatch(fetchStart())
      try {
         
        const { data } = await axios.post(`${BASE_URL}api/${url}/`,info,
        {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
        )
           getBlogData(url)
           dispatch(getSuccess({data,url}))
           toastSuccessNotify("successfuly created!");
      } catch (error) {
          dispatch(fetchFail())
          toastErrorNotify("Adding new blog failed!")
      }
   }

   /* -------------------------------------------------------------------------- */
   /*                                 getCategory                                */
   /* -------------------------------------------------------------------------- */

   const getCategory = async(url) => {
    const { data } = await axios(`${BASE_URL}api/${url}/`)
     dispatch(getCategorySuccess({data,url}))
    console.log(data);
 }

  

    /* -------------------------------------------------------------------------- */
    /*                                   getLike                                  */
    /* -------------------------------------------------------------------------- */
    const getLike = async(id) => {
        const {data} = await axios(`${BASE_URL}api/likes/${id}/`)
        dispatch(getLikeSuccess({data}))
        console.log("getLike:",data);
    }

    /* -------------------------------------------------------------------------- */
    /*                                  postLike                                  */
    /* -------------------------------------------------------------------------- */

//    const postLike = async(id) => {
//     const { data } = await axios.post(`${BASE_URL}api/likes/${id}/`,null,
//     {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//     )
//     dispatch(getLikeSuccess({data}))
//     console.log("postLike:",data);
//  }

 const postLike = async(id) => {
    dispatch(fetchStart())
    try {
       
         await axios.post(`${BASE_URL}api/likes/${id}/`,null,
        {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
        )
        getBlogData("blogs")
         toastSuccessNotify("successfuly created!");
    } catch (error) {
        dispatch(fetchFail())
        toastErrorNotify("Likes failed!")
    }
 }

  return {
    getBlogData,postBlogData,getCategory,getLike,postLike
  }
}

export default useBlogCalls