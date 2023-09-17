import * as React from "react";
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import youtube from "../assets/youtube.svg"
import Typography from "@mui/material/Typography";

import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";


// renders: vimeo icon

export default function About() {
  
  return (
    <>
    <Box display="flex" justifyContent="center" alignContent="center" sx={{height:"570px",width:"400px",backgroundColor:"#061e36",borderRadius:"30px",margin:"100px auto"}}>
         <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
            
            <img className="icon-btn" style={{width:"100px", height:"100px"}}
            src="https://media.tenor.com/ueth-WpGsukAAAAM/mee6-wii-chicken.gif"
            alt="about_image"/>
            <Typography color="white" fontFamily="verdana" fontSize="1.rem" padding="1rem" >I am a Full Stack Developer with a passion for crafting digital solutions that not only meet but exceed the expectations of clients and users. </Typography>
        </Box>
        
       
        
        <Box display="flex" justifyContent="center" flexDirection="column" backgroundColor="#1976D2" width="20rem" alignItems="center" gap="15px">
        <img className="icon-btn" style={{width:"30px", height:"30px", borderRadius:"10px"}} src={facebook} alt="facebook"/>
        <img className="icon-btn" style={{width:"30px", height:"30px", borderRadius:"10px"}} src={instagram} alt="facebook"/>
        <img className="icon-btn" style={{width:"30px", height:"30px", borderRadius:"10px"}} src={linkedin} alt="facebook"/>
        <img className="icon-btn" style={{width:"30px", height:"30px", borderRadius:"10px"}} src={youtube} alt="facebook"/>
        </Box>
        
       

    </Box>
    


    </>
  );
}
