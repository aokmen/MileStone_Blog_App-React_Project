import { Box, Button, TextField,FormControl, IconButton, InputAdornment, } from '@mui/material';
import { Form } from 'formik';
import React from 'react'
import { object, string, ref } from "yup";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export const RegisterSchema = object({
    username: string()
      .max(10, "Username must be less than 10 characters!")
      .required("Username is a required field"),
    first_name: string().max(20, "Name must be less than 20 characters!"),
    last_name: string()
      .max(20, "Last name must be less than 30 characters!"),
    email: string().email().required("Email is a required field"),
    Image: string().url(),
    Bio: string().url(),
    password: string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters!")
      .max(20, "Password must be at most 20 characters!")
      .matches(/\d+/, "Password must contain a number!")
      .matches(/[a-z]/, "Password must contain a lowercase letter!")
      .matches(/[A-Z]/, "Password must contain a capital letter!")
      .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain a special character!"),
    password2: string()
      .oneOf([ref("password"), null], "Passwords must match!")
      .required("Confirm password is required!"),
  });


const RegisterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };  
    return (
    <div>
        <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width:"400px", mx:"auto" }}>
              <TextField
                label="User Name*"
                name="username"
                id="username"
                type="text"
                variant="outlined" 
                value={values.username}               
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.username && errors.username}
                error={touched.username && Boolean(errors.username)}
                />
            <Box display="flex"  gap="5px">
              <TextField
                label="First Name"
                name="first_name"
                id="first_name"
                type="text"
                variant="outlined" 
                value={values.first_name}               
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.first_name && errors.first_name}
                error={touched.first_name && Boolean(errors.first_name)}
                />
              <TextField
                label="Last Name"
                name="last_name"
                id="last_name"
                type="text"
                variant="outlined" 
                value={values.last_name}               
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.last_name && errors.last_name}
                error={touched.last_name && Boolean(errors.last_name)}
                />
            </Box>
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
                label="Image"
                name="image"
                id="image"
                type="url"
                variant="outlined" 
                value={values.image}               
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.image && errors.image}
                error={touched.image && Boolean(errors.image)}
                />
              <TextField
                label="Bio"
                name="bio"
                id="bio"
                type="url"
                variant="outlined" 
                value={values.bio}               
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.bio && errors.bio}
                error={touched.bio && Boolean(errors.bio)}
                />
             <Box display="flex"  gap="5px">
             <FormControl variant="outlined">
              <TextField
                htmlFor="outlined-adornment-password"
                label="Password*"
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl variant="outlined">
              <TextField
                htmlFor="outlined-adornment-password"
                label="Confirm Password*"
                name="password2"
                id="password2"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={values.password2}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password2 && errors.password2}
                error={touched.password2 && Boolean(errors.password2)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
              {/* <TextField
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
              <TextField
                label="Confirm Password*"
                name="password2"
                id="password2"
                type="password"
                variant="outlined" 
                value={values.password2}               
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password2 && errors.password2}
                error={touched.password2 && Boolean(errors.password2)}
                /> */}
            </Box>
            <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                >
                Sign Up
                </Button>
            </Box>
        </Form>
    </div>
  )
}

export default RegisterForm