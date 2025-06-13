import { Link } from "react-router-dom";
import { useAuthStateRedirect } from "@/hooks/useAuthStateRedirect.ts";

export default function VerifyEmailPage() {
  useAuthStateRedirect();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Check your email</h1>
          <p className="text-muted-foreground">
            Please verify your email address. Once confirmed, you’ll be redirected automatically.
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          Not ready yet?{" "}
          <Link to="/auth/register" className="text-primary hover:underline">
            Back to register
          </Link>
        </div>
      </div>
    </div>
  );
}
