import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


export default function CommentCard({ id,content,post,time_stamp,user}) {

 let new_date = new Date(time_stamp).toLocaleString()


  return (
    
    <Card sx={{ width:"80%", margin:"1rem auto", boxShadow:"0 0 20px rgba(0, 0, 0, 0.2)", borderRadius:"20px", padding:"0.3rem", position:"relative"}}>  
      <Box display="flex" alignItems="center"> 
        <Typography  width="4rem"  height="4rem"  margin="1rem 0 -1rem 0" display="flex" justifyContent="center" alignItems="center" color="white" borderRadius="0.5rem" zIndex="1"  sx={{ wordBreak: "break-word"}}> {user}</Typography> 

        <Typography sx={{fontSize: "0.8rem",marginLeft:"1.5rem", marginTop:"1rem",zIndex:"1",width:"20rem",color:"#061e36"}}>- {content} </Typography>
        
      </Box> 
      <Box position="absolute" backgroundColor="gray" top="0" left="0" height="100%" width="5rem"></Box>
        <CardContent>
            <Typography variant="body2" color="lightgray" position="absolute" right="1rem" bottom="1rem" fontSize= "0.8rem" >
            {new_date}
            </Typography>
        </CardContent>
       </Card>
  );
}