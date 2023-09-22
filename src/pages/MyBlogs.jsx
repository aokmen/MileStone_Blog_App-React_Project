import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useBlogCalls from '../hooks/useBlogCalls'
import { Box, Button } from '@mui/material'
import Card from "../components/blog/Card"
import { useNavigate } from 'react-router-dom'

const MyBlogs = () => {
    // const {blogs} = useSelector(state=>state.blog)
    // const {username} = useSelector(state=>state.auth)
    const navigate = useNavigate()
    const {getUser} = useBlogCalls()
    const {userId} = useSelector(state=>state.auth)
    const {myUser} = useSelector(state=>state.blog)
   useEffect(()=>{
        //  getBlogData("blogs")
         getUser(userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
  
    <>
      <Box sx={{display:"flex", justifyContent:"center", gap:3, flexWrap:"wrap", marginTop:"5.5rem", marginBottom:"10rem" }}>
 
     {/* {blogs
        .filter((item) => item.author === username)
        .map((item, i) => <Card {...item} key={i} />)
} */}

      {myUser?.map((item, i) => <Card {...item} key={i} />)}
  
    </Box>
    <Box textAlign="center">
        <Button variant="contained" sx={{backgroundColor:'#061e36', marginTop:"-13rem"}} onClick={()=>navigate("/newblog")}>Write Blog</Button>
    </Box>
    </>
  )
}

 export default MyBlogs