import * as yup from 'yup';

export const registerSchema=yup.object().shape({
    firstname:yup.string().min(2).required('First Name is required'),
    lastname:yup.string().min(2).required('Last name is required'),
    email:yup.string().email('Email must be valid').required('Email is required'),
    password:yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required('Password is required'),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null],"Passwords must match"),
});
export const loginSchema=yup.object().shape({
    email:yup.string().email("Enter a valid Email").required('Email is required'),
    password:yup.string().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required('Password is required'),
});