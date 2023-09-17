import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import ChatIcon from '@mui/icons-material/Chat';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({author,title, category_name,comment_count,content,image, likes, publish_date, post_views}) {
  const [expanded, setExpanded] = React.useState(false);


  
 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 let new_date = new Date(publish_date).toLocaleString()
  return (
    
    <Card sx={{ maxWidth: 345, minWidth:200, boxShadow:"0 0 20px rgba(0, 0, 0, 0.2)"}}>  
         <CardMedia
        component="img"
        height="120px"
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
            <Typography variant="body2" color="text.secondary"  sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden',   textOverflow: 'ellipsis'}}>
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
        
      </CardActions>
      <Button variant="contained" sx={{height:"35px",margin:"10px"}}>Read More</Button>
      </Box>
    </Card>
  );
}