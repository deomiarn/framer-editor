import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { authSchema, AuthSchema } from "@/lib/schemas/authSchema";

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
import { Link } from "react-router-dom";
import { useSmartNavigate } from "@/hooks/useSmartNavigate.ts";
import { supabase } from "@/lib/supabase/client.ts";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [message] = useState("");
  const navigate = useSmartNavigate();

  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const registerUser = async (values: AuthSchema) => {
    setLoading(true);

    await supabase.auth
      .signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/verify-email`
        }
      })
      .then(() => setLoading(false))
      .then(() => navigate("/auth/verify-email", "/register"))
      .catch((error) => form.setError("email", { message: error.message }));
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-semibold text-center">Create Account</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(registerUser)} className="space-y-4">
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
          <Button isLoading={loading} type="submit" className="w-full py-5">
            Register
          </Button>
          {message && <p className="text-sm text-center text-muted-foreground">{message}</p>}
        </form>
      </Form>

      <div className="text-sm text-center text-muted-foreground">
        Already have an account?{" "}
        <Link to="/" className="text-primary hover:underline">
          Log in
        </Link>
      </div>
    </div>
  );
}
