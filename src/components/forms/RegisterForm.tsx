import { Form, useForm } from "react-hook-form";
import { AuthSchema, authSchema } from "@/lib/schemas/authSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Input } from "@/components/ui/input.tsx";

export default function RegisterForm() {
  const [message, setMessage] = useState("");

  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values: AuthSchema) => {
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password
    });

    setMessage(error ? error.message : "✅ Bitte bestätige deine E-Mail.");
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Registrieren</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
          <Button type="submit" className="w-full">
            Registrieren
          </Button>
          {message && <p className="text-sm text-center text-muted-foreground">{message}</p>}
        </form>
      </Form>
    </div>
  );
}
