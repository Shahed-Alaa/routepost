import * as z from "zod";

export const registerSchema = z.object({
    name: z.string().nonempty("Full name is required.").min(3, "Char Not less than 3 ").max(20, "Char Not excced 20"),
    username: z.string(),
    email: z.string().nonempty("Email is required.").email("Email is Not valid"),
    gender: z.string().nonempty("Gender is required."),
    dateOfBirth: z.string().nonempty("Date of birth is required.").refine((date)=>{
        let currentYear = new Date().getFullYear();//2026
        let ageYear = new Date(date).getFullYear();//2222
    
        return ageYear <= currentYear ;
    },"Date of birth cannot be in the future."),

    password: z.string().nonempty("Password is required.").min(8, "Password must be at least 8 characters").regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/,
        "Password must include uppercase, lowercase, number, and special character"
    ),
    rePassword: z.string().nonempty("rePassword is required."),
}).refine((data)=> data.password === data.rePassword , {
    path:["rePassword"],
    message:"rePassword not Match password"
})

export const loginSchema = z.object({
    email: z.string().nonempty("Email is required.").email("Email is Not valid"),
    password: z.string().nonempty("Password is required.").min(8, "Password must be at least 8 characters").regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/,
        "Password must include uppercase, lowercase, number, and special character"),
})


export const changePasswordSchema = z.object({
    password: z.string().nonempty("Current password is required."),

    newPassword: z.string().nonempty("New password is required.").min(8, "Password must be at least 8 characters").regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/,
      "Password must include uppercase, lowercase, number, and special character"
    ),

  confirmPassword: z.string().nonempty("confirm Password is Required")

}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});