import z from "zod";

export const loginSchema = z.object({
  email: z.email("Adresse email invalide"),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .max(50, "Le mot de passe ne doit pas dépasser 50 caractères"),
});
