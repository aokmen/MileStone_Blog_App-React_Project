import * as React from "react";


import Typography from "@mui/material/Typography";

import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";


export default function NewBlog() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    
    <Box sx={{height:"570px",width:"400px",backgroundColor:"#061e36",borderRadius:"30px",margin:"100px auto"}}>
        <Typography color="white" fontFamily="verdana" fontSize="1.5rem" padding="1rem">New Blog</Typography>
       
        <TextField className="blogInput" label="Title*" color="primary" required />

        <TextField className="blogInput" label="Image URL*" color="primary" type="url" required />
       
        <FormControl className="blogInput" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Please choose...</em>
          </MenuItem>
          <MenuItem value={10}>AI</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
      <FormControl className="blogInput" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Please choose...</em>
          </MenuItem>
          <MenuItem value={10}>Best</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl>
  
        <TextField className="blogInput" label="Search field" color="primary" required />
        <Box display="flex" justifyContent="center"><Button variant="contained">New Blog</Button></Box>
        
       

    </Box>
   
  );
}
