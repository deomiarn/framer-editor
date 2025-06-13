import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase/client";

export function useAuthStateRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user?.email_confirmed_at) {
        navigate("/home");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);
}
