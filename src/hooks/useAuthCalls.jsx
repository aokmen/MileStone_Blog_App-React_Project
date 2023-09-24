import { fetchFail,fetchStart,registerSuccess,loginSuccess, logoutSuccess } from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {useDispatch, useSelector} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
const useAuthCalls = () => {
    const {state} = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token} = useSelector(state=>state.auth);
    const BASE_URL = process.env.REACT_APP_BASE_URL

    /* -------------------------------------------------------------------------- */
    /*                                  register                                  */
    /* -------------------------------------------------------------------------- */

     const register = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const {data} = await axios.post(`${BASE_URL}users/register/`,userInfo)
            dispatch(registerSuccess(data))
            toastSuccessNotify("Register successful")
            navigate("/")
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify(error.message)
        }
     }
     /* -------------------------------------------------------------------------- */
     /*                                    login                                   */
     /* -------------------------------------------------------------------------- */

     const login = async (userInfo) => {
        dispatch(fetchStart());
        try {
            const {data} = await axios.post(`${BASE_URL}users/auth/login/`,userInfo)
            dispatch(loginSuccess(data));
            toastSuccessNotify("Login successful")
            navigate(-1)
        
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify(error.message)
        }
     }
     /* -------------------------------------------------------------------------- */
     /*                                   logout                                   */
     /* -------------------------------------------------------------------------- */

     const logout = async () => {
        dispatch(fetchStart())
        try {
            await axios.post(`${BASE_URL}users/auth/logout/`,null,{
            headers: {
                Authorization: `Token ${token}`,
              },
        });
        dispatch(logoutSuccess())
        toastSuccessNotify("Logout performed")
        navigate("/login")   
        } catch (error) {
        dispatch(fetchFail())
        toastErrorNotify(error.message)
        }
     }

  return {register,login,logout}

  
}

export default useAuthCalls