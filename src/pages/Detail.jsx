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
import { useSelector } from 'react-redux';
import ChatIcon from '@mui/icons-material/Chat';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import useBlogCalls from '../hooks/useBlogCalls';
import CommentCard from '../components/blog/CommentCard';
import CommentForm from '../components/blog/CommentForm';
import UpdateModal from '../components/blog/UpdateModal';

const Detail = () => {
    const { id } = useParams();
  const { details} = useSelector((state) => state.blog);
  const {userId} = useSelector(state=>state.auth)
  const {getDetail,postLike} = useBlogCalls()
  const [show, setShow] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);
  const { author, title, category_name, comment_count, content, image, likes, publish_date, post_views,likes_n,comments } = details
  const {username} = useSelector(state=>state.auth)
  let new_date = new Date(publish_date).toLocaleString();
  const {deleteBlogData} = useBlogCalls()
  
  React.useEffect(() => {
    getDetail(id)
  }, [])


 const handleFavorite = () => { postLike(id,true)
//   .then(() => {
//   getDetail(id);
//  }) 

}
const handleDeleteClick = () => {
  deleteBlogData(id)
}

  return (
    <Card sx={{ maxWidth: 545, minWidth: 200, boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)", borderRadius: "20px", padding: "0.3rem", margin: "10rem auto", }}>
      <CardMedia
        component="img"
        height="300px"
        image={image}
        alt="Paella dish"
        sx={{ marginTop: "10px", objectFit: "contain" }}
      />

      <Typography textAlign="center" marginTop="1rem">
        <span color="#061e36">
          {author}
        </span> <span style={{ fontSize: "0.8rem", paddingLeft: "1rem" }}>
          {new_date}
        </span>
      </Typography>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} >
            {(title?.toUpperCase().charAt(0))}
          </Avatar>
        }
        titleTypographyProps={{ variant: 'h5' }}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary"  >
          {content}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex"}}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"  onClick={handleFavorite}>
          {likes_n?.some((item) => item.user_id === userId) ? (
            <FavoriteIcon color="error" /> ) : (<FavoriteIcon />)}
          {likes}
          </IconButton>
          <IconButton aria-label="share" onClick={()=>setShow(!show)}>
            <ChatIcon /> {comment_count}
          </IconButton>
          <IconButton aria-label="share">
            <VisibilityIcon />
            {post_views}
          </IconButton>
        </CardActions>
        {author === username && 
        <Box marginLeft="9rem"  marginTop="0.5rem" > 
        <Button variant="contained"  sx={{marginRight:"1rem", backgroundColor:"gray"}} onClick={() => handleOpen()} >Update</Button> 
        <Button variant="contained" color="error" marginLeft="1rem" onClick={()=>handleDeleteClick()}>Delete</Button> 
        </Box>
        }
      </Box>
     {show && 
     <>
      {comments?.map(item=>(<CommentCard key={item.id} {...item}/>))}
      <CommentForm/>
     </>
     }
    <UpdateModal open={open} handleClose={handleClose}/>
    </Card>
  );
}

export default Detail;
