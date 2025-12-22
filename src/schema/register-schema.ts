import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom est trop court")
    .max(50, "Le nom est trop long")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s\-]+$/, "Nom invalide"),

  email: z.email("Adresse email invalide"),

  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .max(50, "Le mot de passe ne doit pas dépasser 50 caractères")
    .regex(/[A-Z]/, "Il manque une lettre majuscule")
    .regex(/[a-z]/, "Il manque une lettre minuscule")
    .regex(/\d/, "Il manque un chiffre")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Il manque un caractère spécial"),
});
