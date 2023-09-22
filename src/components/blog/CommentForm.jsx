import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import useBlogCalls from '../../hooks/useBlogCalls';
import { useParams } from 'react-router-dom';


const CommentForm = () => {
  const {postComment} = useBlogCalls()
  const {id} = useParams()
  const [info, setInfo] = React.useState({
    post: id,
    content: ""
  });


const handleChange = (e) => {setInfo({...info,[e.target.name]:e.target.value})};
const handleSubmit = (e) => {postComment(id, info); 
  e.preventDefault();
    setInfo({
      post: id,
      content: ""
    })
}

  return (
    <FormControl fullWidth sx={{width:"500px", margin:"1rem"}} component="form" onSubmit={handleSubmit}>
                  
         <TextField
          id="outlined-multiline-static"
          label="Comment"
          name="content"
          multiline
          rows={4}
          placeholder="Add a comment"
          value={info.content}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
      
        <Button variant="contained" type="submit" sx={{backgroundColor:"#061e36"}} > Add Comment</Button>
     
    </FormControl>
  )
}

export default CommentForm