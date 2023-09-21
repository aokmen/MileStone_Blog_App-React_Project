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
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import useBlogCalls from '../hooks/useBlogCalls';
import CommentCard from '../components/blog/CommentCard';
import CommentForm from '../components/blog/CommentForm';

const Detail = () => {
    const { id } = useParams();
  const { details,comments} = useSelector((state) => state.blog);
  const {userId} = useSelector(state=>state.auth)
  const {getDetail,postLike,getComment} = useBlogCalls()
  const [show, setShow] = React.useState(false)
  // blogs dizisi içinde id'ye sahip bir öğe var mı kontrol et
  // if (!blogs || id <= 0 || id > blogs.length) {
  //   return <div>Böyle bir blog bulunamadı.</div>;
  // }

  const { author, title, category_name, comment_count, content, image, likes, publish_date, post_views,likes_n } = details
  let new_date = new Date(publish_date).toLocaleString();

  React.useEffect(() => {
    getDetail(id)

      getComment(id)
      console.log("comments",comments);

  }, [])


 const handleFavorite = () => { postLike(id); getDetail(id); }

=======

const Detail = () => {
  const { id } = useParams();
  const { blogs } = useSelector((state) => state.blog);
>>>>>>> f53a9e8d3a134a11328a3bae7b8561eea85d52b3

  // blogs dizisi içinde id'ye sahip bir öğe var mı kontrol et
  if (!blogs || id <= 0 || id > blogs.length) {
    return <div>Böyle bir blog bulunamadı.</div>;
  }

  const { author, title, category_name, comment_count, content, image, likes, publish_date, post_views } = blogs[id - 1];
  let new_date = new Date(publish_date).toLocaleString();

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
<<<<<<< HEAD
            {(title?.toUpperCase().charAt(0))}
=======
            {(title.toUpperCase().charAt(0))}
>>>>>>> f53a9e8d3a134a11328a3bae7b8561eea85d52b3
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardActions disableSpacing>
<<<<<<< HEAD
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
=======
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ChatIcon />
          </IconButton>
          <IconButton aria-label="share">
            <VisibilityIcon />
>>>>>>> f53a9e8d3a134a11328a3bae7b8561eea85d52b3
          </IconButton>
        </CardActions>
      </Box>
     {show && comments.map(item=>(<CommentCard {...item}/>))}
     {show && (<CommentForm/>)}
    </Card>
  );
}

export default Detail;
