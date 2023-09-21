import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const CommentForm = () => {
    
  return (
    <FormControl fullWidth sx={{width:"500px", margin:"1rem"}}>
                  
         <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          placeholder="Add a comment"
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
      
        <Button variant="contained" type="submit" sx={{backgroundColor:"#061e36"}} > Add Comment</Button>
     
    </FormControl>
  )
}

export default CommentForm