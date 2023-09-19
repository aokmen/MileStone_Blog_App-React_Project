import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function RecipeReviewCard({author,title,id, category_name,comment_count,content,image, likes, publish_date, post_views}) {

   const navigate = useNavigate()
  //  const {id} = useParams()
  
 

 
 let new_date = new Date(publish_date).toLocaleString()
  return (
    
    <Card sx={{ maxWidth: 345, minWidth:200, boxShadow:"0 0 20px rgba(0, 0, 0, 0.2)", borderRadius:"20px", padding:"0.3rem"}}>  
         <CardMedia
        component="img"
        height="100px"
        image={image}
        alt="Paella dish"
        sx={{ marginTop:"10px", objectFit: "contain" }}
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} >
           
            {(title.toUpperCase().charAt(0))}
         
          </Avatar> 
          
        }
       
        titleTypographyProps={{variant:'h5' }}
        title={title}
        />  
        <CardContent>
            <Typography variant="body2" color="text.secondary"  sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden',   textOverflow: 'ellipsis'}}>
                {content}
            </Typography>
        </CardContent>
        <Typography paddingLeft="1rem" marginBottom="15px"><span style={{border:"1px solid black",padding:"5px", borderRadius:"5px",}}>{author}</span> <span style={{fontSize: "0.8rem",paddingLeft:"1rem"}}>{new_date}</span></Typography>

     
      
     <Box sx={{display:"flex", justifyContent:"space-between"}}>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ChatIcon />
        </IconButton>
        <IconButton aria-label="share">
          <VisibilityIcon />
        </IconButton>
        {/* (id)=>navigate(`/detail/${id}`) */}
      </CardActions>
      <Button variant="contained" sx={{height:"35px",margin:"10px"}} onClick={()=>navigate(`/detail/${id}`)}>Read More</Button>
      </Box>
    </Card>
  );
}