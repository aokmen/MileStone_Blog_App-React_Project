import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchFail, fetchStart, getCategorySuccess, getSuccess,getDetailSuccess, getCommentSuccess, getUserSuccess } from '../features/blogSlice';
import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from 'react-router-dom';

const useBlogCalls = () => {

     const dispatch = useDispatch()
     const navigate = useNavigate()
     const BASE_URL = process.env.REACT_APP_BASE_URL;
     const {token} = useSelector(state=>state.auth)
     const {userId} = useSelector(state=>state.auth)
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
   /*                               deleteBlogData                               */
   /* -------------------------------------------------------------------------- */

   const deleteBlogData = async(id) => {
      dispatch(fetchStart());
    try {
       await axios.delete(`${BASE_URL}api/blogs/${id}/`,
       {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      navigate(-1)
      toastSuccessNotify(`Blog successfuly deleted!`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`Blog not deleted successfully!`);
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
    /*                                  postLike                                  */
    /* -------------------------------------------------------------------------- */

 const postLike = async(id,detail=false) => {
    dispatch(fetchStart())
    try {
       
         await axios.post(`${BASE_URL}api/likes/${id}/`,null,
        {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
        )
        if(detail){getDetail(id)}
        else getBlogData("blogs")
       
    } catch (error) {
        dispatch(fetchFail())
    }
 }

    /* -------------------------------------------------------------------------- */
    /*                                  getDetail                                 */
    /* -------------------------------------------------------------------------- */
    
   const getDetail = async(id) => {
   

    const { data } = await axios(`${BASE_URL}api/blogs/${id}/`,
    {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
    )
    dispatch(getDetailSuccess(data))
       
 }
    /* -------------------------------------------------------------------------- */
    /*                                   getUser                                  */
    /* -------------------------------------------------------------------------- */
    
    const getUser = async(userId) => {
   

      const { data } = await axios(`${BASE_URL}api/blogs?author=${userId}`,
      {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
      )
      dispatch(getUserSuccess(data))
         
   }

    /* -------------------------------------------------------------------------- */
    /*                                 postComment                                */
    /* -------------------------------------------------------------------------- */

    const postComment = async(id,info) => {
             dispatch(fetchStart())
            try {
                await axios.post(`${BASE_URL}api/comments/${id}/`,info,
                    {
                        headers: {
                            Authorization: `Token ${token}`,
                        },
                        }
                    )
                    toastSuccessNotify("Comment created!");    
                    getDetail(id)
            } catch (error) {
                dispatch(fetchFail())
                toastErrorNotify("Comment failed!")
            }
                    
           
     }

  return {
    getBlogData,postBlogData,getCategory,postLike,getDetail,getUser,postComment,deleteBlogData
  }
}

export default useBlogCalls