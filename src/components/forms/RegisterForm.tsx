import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import { authSchema, AuthSchema } from "@/lib/schemas/authSchema";
import { supabase } from "@/lib/supabase/client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  const [message, setMessage] = useState("");

  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof authSchema>) => {
    const { error } = await supabase.auth.signUp(values);
    setMessage(error ? error.message : "✅ Bitte bestätige deine E-Mail.");
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-semibold text-center">Konto erstellen</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="mail@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Passwort</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full py-5">
            Registrieren
          </Button>
          {message && <p className="text-sm text-center text-muted-foreground">{message}</p>}
        </form>
      </Form>

      <div className="text-sm text-center text-muted-foreground">
        Bereits registriert?{" "}
        <a href="/login" className="underline underline-offset-4 hover:text-primary">
          Jetzt einloggen
        </a>
      </div>
    </div>
  );
}
