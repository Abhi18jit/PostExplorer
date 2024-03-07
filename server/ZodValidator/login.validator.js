const {z}=require("zod");

const loginSchema=z.object({
    email: z
    .string({required_error:"Please Enter a valid email"})
    .trim()
    .email()
    .min(5,{message:"Proper format of E-Mail is required"}),

    password: z
    .string({required_error:"Please enter correct password"})
    .trim()
    .min(5,{message:"MinLength of password should be more than 5"}),
});

module.exports=loginSchema;