import * as z from "zod";

export const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  agree: z.boolean().refine(val=> val === true, {message:"You must accept the terms"}),
});
