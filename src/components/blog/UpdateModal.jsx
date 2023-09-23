import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, Typography, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import useBlogCalls from '../../hooks/useBlogCalls';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function UpdateModal({open,handleClose}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
    const {id} = useParams() 
    const {categories,details} = useSelector(state=>state.blog)
    const {getDetail,getCategory,putBlogData,getBlogData} = useBlogCalls()
    const [info, setInfo] = React.useState({
    title: details.title,
    content: details.content,
    image: details.image,
    category: details.category,
    status: details.status,
    });
    React.useEffect(() => {
        // getDetail(id)
        console.log("updateModal:",details);
        getCategory("categories")
    }, [])
    
    const handleChange = (e) => {
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const handleSubmit = e => {
         e.preventDefault();
         putBlogData(id, info); //! update işleminde info dolu geldiği için içerisinde id bilgiside yer alıyor. Biz bu id üzerinden sorgulama yaparak id varsa yapacağın işlem put işlemi id yoksa yapacağın işlem post işlemi diye belirtmiş olduk.
        //   getBlogData(id)
         getDetail(id)
    }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
    
         <TextField
         className="blogInput"
          id="outlined-select-currency"
          select
          label="Category"
          name = "category"
          value = {info.category}
          defaultValue="Category"
          helperText="Please select your category"
          onChange={handleChange}
        >
          
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
        <Box display="flex" justifyContent="center" margin="0.5rem"><Button variant="contained" type="submit">New Blog</Button></Box>
        
       

    </Box>
      </Modal>
    </div>
  );
}
