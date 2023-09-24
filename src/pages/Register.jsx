import React, { useEffect } from 'react'
import { Formik } from 'formik';
import RegisterForm, { RegisterSchema } from '../components/auth/RegisterForm';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuthCalls from '../hooks/useAuthCalls';
import { useSelector } from 'react-redux';
import useBlogCalls from '../hooks/useBlogCalls';

const Register = () => {
 
  const {register} = useAuthCalls()

  return (
    <Container maxWidth="lg" sx={{marginTop:"8rem", border:"1px solid gray", width:"500px", padding:"2rem", borderRadius:"2rem", boxShadow:"0 0 20px #061e36"}}>
     
      

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "primary",
              m: "auto",
              width: 40,
              height: 40,
            }}>
           
          </Avatar>
          <Typography
            variant="h5"
            align="center"
            mb={2}
            color="info.dark">
            Register
          </Typography>
    <Formik
       initialValues={{
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        image: "",
        bio: "",
        password: "",
        password2: "",}}
       validationSchema={RegisterSchema}
       onSubmit={(values, actions) => {
         register(values);
         actions.resetForm();
         actions.setSubmitting(false)
       }}component={props => <RegisterForm {...props} />}>
     </Formik>
     <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/login">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
       
        </Grid>
     
    </Container>
  )
}

export default Register