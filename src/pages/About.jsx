import * as React from "react";
import facebook from "../assets/facebook.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import youtube from "../assets/youtube.svg"
import Typography from "@mui/material/Typography";

import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";


// renders: vimeo icon

export default function About() {
  
  return (
    <>
    <Box display="flex" justifyContent="center" alignContent="center" sx={{height:"570px",width:"500px",backgroundColor:"#061e36",borderRadius:"30px",margin:"160px auto"}}>
         <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" >
            
            <img className="icon-about" 
            src="https://media.tenor.com/ueth-WpGsukAAAAM/mee6-wii-chicken.gif"
            alt="about_image"/>
            <Typography color="white" fontFamily="verdana" fontSize="1.rem" padding="3rem" >I am a Full Stack Developer with a passion for crafting digital solutions that not only meet but exceed the expectations of clients and users. </Typography>
        </Box>
        
       
        
        <Box display="flex" justifyContent="center" flexDirection="column" backgroundColor="#1976D2" width="20rem" alignItems="center" gap="15px" borderRadius="30px" >
        <a  href="http://www.github.com" target='true'><img className="icon-btn" src={github} alt="github"/></a>
        <a  href="http://www.facebook.com" target='true'><img className="icon-btn" src={facebook} alt="facebook"/></a>
        <a  href="http://www.linkedin.com" target='true'><img className="icon-btn" src={linkedin} alt="linkedin"/></a>
        <a  href="http://www.youtube.com" target='true'><img className="icon-btn" src={youtube} alt="youtube"/></a>
        </Box>
        
       

    </Box>
    


    </>
  );
}
