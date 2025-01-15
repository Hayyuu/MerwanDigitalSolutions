import { Link, Navigate } from "react-router";
import {registerSchema} from "../Schemas/index"
import {useFormik} from "formik";
import { registerUser } from "../Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { register,getUser } from "../State/User/userSlice";
import { store } from "../State/store";
export default function Register(){
    const userData=useSelector((state)=>state.user);
    if(userData.registerd){
        console.log(userData);
    }
    const dispatch=useDispatch();
    const formik=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            confirmpassword:"",
        },
        validationSchema:registerSchema,
        onSubmit:values=>{
            dispatch(register(values));
            console.log("submit");
            
        },
        
    });
    
    return <div>
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit}>
            <input name="firstname" placeholder="First Name" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <span>{formik.errors.firstname && formik.touched.firstname && formik.errors.firstname}</span>
            <input name="lastname" placeholder="Last Name" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <span>{formik.errors.lastname && formik.touched.lastname && formik.errors.lastname}</span>
            <input name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <span>{formik.errors.email && formik.touched.email && formik.errors.email}</span>
            <input name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <span>{formik.errors.password && formik.touched.password && formik.errors.password}</span>
            <input name="confirmpassword" placeholder="Confirm Password" value={formik.values.confirmpassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <span>{formik.errors.confirmpassword && formik.touched.confirmpassword && formik.errors.confirmpassword}</span>
            <button type="submit" >Submit</button>
        </form>
        <p>Have Account {userData.registerd?`true`:`false` }<Link to='/login'><b>Login</b></Link></p>
    </div>
}