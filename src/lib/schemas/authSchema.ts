import { z } from "zod";
import { validationMessages } from "@/lib/messages/validationMessages.ts";

export const authSchema = z.object({
  email: z.string().email({ message: validationMessages.email }),

  password: z
    .string()
    .min(8, { message: validationMessages.passwordMin })
    .regex(/[a-z]/, { message: validationMessages.passwordLowercase })
    .regex(/[A-Z]/, { message: validationMessages.passwordUppercase })
    .regex(/[0-9]/, { message: validationMessages.passwordNumber })
    .regex(/[^a-zA-Z0-9]/, { message: validationMessages.passwordSymbol })
});

export type AuthSchema = z.infer<typeof authSchema>;
