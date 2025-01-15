import { Link } from "react-router";
import {useFormik} from "formik";
import { loginSchema } from "../Schemas";
import {login} from "../State/User/userSlice"
import { useDispatch, useSelector } from "react-redux";
export default function Login(){
  const userData=useSelector((state)=>state.user);
  const dispatch=useDispatch();
  if(userData.signedIn){
    console.log(userData);
  }
  const formik=useFormik({
          initialValues:{
              email:"",
              password:"",
          },
          validationSchema:loginSchema,
          onSubmit:values=>dispatch(login(values)),
          
      });
      return <div>
          <h2>Login {userData.signedIn?`Success`:`Failed` }</h2>
          <form onSubmit={formik.handleSubmit}>
              <span>{formik.errors.lastname && formik.touched.lastname && formik.errors.lastname}</span>
              <input name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <span>{formik.errors.email && formik.touched.email && formik.errors.email}</span>
              <input name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <span>{formik.errors.password && formik.touched.password && formik.errors.password}</span>
             
              <button type="submit" disabled={formik.isSubmitting}>Submit</button>
          </form>
       <p>Don't have an account?<Link to='/register'><b>Sign Up</b></Link></p>
    </div>
}