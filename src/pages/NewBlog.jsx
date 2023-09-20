import * as React from "react";


import Typography from "@mui/material/Typography";

import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";


export default function NewBlog() {

  const {blogs,categories} = useSelector(state=>state.blog)
  const [info, setInfo] = React.useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "p",
  });
    const {postBlogData,getBlogData,getCategory} = useBlogCalls()
   

    React.useEffect(()=>{
         getBlogData("blogs")
         getCategory("categories")
        console.log("blogs",blogs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleChange = (e) => {
      
      setInfo({...info,[e.target.name]:e.target.value});
      console.log(info);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      postBlogData("blogs", info);
     console.log(info);
    }
  return (
    
    <Box sx={{height:"570px",width:"500px",backgroundColor:"#061e36",borderRadius:"30px",margin:"160px auto"}} component="form" onSubmit={handleSubmit}>
        <Typography color="white" fontFamily="verdana" fontSize="1.5rem" padding="1rem" textAlign="center">New Blog</Typography>
       
        <TextField className="blogInput"
              id="title"
              name="title"
              label="Title"
              type="text"
              value={info.title}
              onChange={handleChange}
              required
            />
        <TextField className="blogInput"
              id="image"
              name="image"
              label="Image URL"
              type="url"
              value={info.image}
              onChange={handleChange}
              required
            />
        {/* <TextField className="blogInput"
              id="category"
              name="category"
              label="category"
              type="number"
              value={info.category}
              onChange={handleChange}
              required
            />
        <TextField className="blogInput"
              id="status"
              name="status"
              label="status"
              type="text"
              value={info.status}
              onChange={handleChange}
              required
            /> */}
               
        {/* <FormControl className="blogInput" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="category"
          value= {info.category}
          label="Category"
          onChange={handleChange}
        >
          {categories.map(item=>(
            <MenuItem key={item.id}>{item.name
            }</MenuItem>
          ))}
         </Select>
     
      </FormControl> */}
         <TextField
         className="blogInput"
          id="outlined-select-currency"
          select
          label="Category"
          name = "category"
          value = {info.category}
          defaultValue="Category"
          helperText="Please select your currency"
          onChange={handleChange}
        >
          <MenuItem value={0}> please choose...</MenuItem>
          {categories.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
      <FormControl className="blogInput" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
           labelId="demo-simple-select-label"
           id="status"
           name="status"
           value={info.status}
           label="Status"
           onChange={handleChange}
         >
   
             <MenuItem value="d">Draft</MenuItem>
             <MenuItem value="p">Published</MenuItem>
          
        </Select>
    
      </FormControl>

      <TextField className="blogInput"
              id="content"
              name="content"
              label="Content"
              type="text"
              value={info.content}
              onChange={handleChange}
              required
            />
        <Box display="flex" justifyContent="center" marginTop="1rem"><Button variant="contained" type="submit">New Blog</Button></Box>
        
       

    </Box>
   
  );
}
