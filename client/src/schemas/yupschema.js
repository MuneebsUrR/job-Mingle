import * as Yup from "yup"

export const signUpSchema = Yup.object({
    firstname:Yup.string().required("Please enter your first name"),
    lastname:Yup.string().required("Please enter your last name"),
    email:Yup.string().email().required("Please enter email "),
    contact:Yup.number().required("Please enter phone number"),
    password:Yup.string().min(6).required("Please enter password"),
    confirmpassword: Yup.string().required("Required").oneOf([Yup.ref('password'),null], 'Password must match'),
})