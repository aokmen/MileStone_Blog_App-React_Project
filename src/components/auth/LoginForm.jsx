import { Box, Button, TextField } from '@mui/material';
import { Form } from 'formik';
import React from 'react'
import { object, string} from "yup";

export const LoginSchema = object({
    email: string().email().required("Email is a required field!"),
    password: string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters!")
      .max(20, "Password must be at most 20 characters!")
      .matches(/\d+/, "Password must contain a number!")
      .matches(/[a-z]/, "Password must contain a lowercase letter!")
      .matches(/[A-Z]/, "Password must contain a capital letter!")
      .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain a special character!"),
})

const LoginForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
}) => {
          
    return (
    <div>
        <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width:"400px", mx:"auto" }}>
             
              <TextField
                label="Email Adress*"
                name="email"
                id="email"
                type="email"
                variant="outlined" 
                value={values.email}               
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
                />
              
              <TextField
                label="Password*"
                name="password"
                id="password"
                type="password"
                variant="outlined" 
                value={values.password}               
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
                />
               <Button 
                type="submit"
                variant="contained"
                size="large"
               >
                Login
              </Button> 
            </Box>
        </Form>
    </div>
  )
}

export default LoginForm