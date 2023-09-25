import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useBlogCalls from '../hooks/useBlogCalls'
import Card from "../components/blog/Card"
import { Box } from '@mui/material'

const Dashboard = () => {
    const {blogs} = useSelector(state=>state.blog)
    
    const {getBlogData} = useBlogCalls()

    useEffect(()=>{
         getBlogData("blogs")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    return (
    <Box sx={{display:"flex", justifyContent:"center", gap:3, flexWrap:"wrap", marginTop:"5.5rem", marginBottom:"5rem"
}}>
        {blogs?.map((item,i)=>(

            <Card {...item} key={i} />

        ))}
    </Box>
  )
}

export default Dashboard