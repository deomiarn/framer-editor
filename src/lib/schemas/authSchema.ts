import { z } from "zod";
import { validationMessages } from "@/lib/messages/validationMessages.ts";

export const authSchema = z.object({
  email: z.string().email({ message: validationMessages.email }),
  password: z.string().min(6, { message: validationMessages.passwordMin })
});

export type AuthSchema = z.infer<typeof authSchema>;
