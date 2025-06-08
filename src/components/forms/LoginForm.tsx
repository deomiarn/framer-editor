import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSmartNavigate } from "@/hooks/useSmartNavigate";

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
import { Link } from "react-router-dom";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useSmartNavigate();

  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values: AuthSchema) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword(values);
    setLoading(false);

    if (error) {
      form.setError("email", { message: error.message });
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-semibold text-center">Login</h1>

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
          <Button isLoading={loading} type="submit" className="w-full py-5">
            Login
          </Button>
        </form>
      </Form>

      <div className="text-sm text-center text-muted-foreground">
        No account yet?{" "}
        <Link to="/auth/register" className="underline underline-offset-4 hover:text-primary">
          Register now
        </Link>
      </div>
    </div>
  );
}
