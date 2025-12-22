import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s\-]+$/, "Invalid name"),

  email: z.string().email("Invalid email"),

  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, "Missing uppercase letter")
    .regex(/[a-z]/, "Missing lowercase letter")
    .regex(/\d/, "Missing number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Missing special character"),
});
