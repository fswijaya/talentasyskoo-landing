import { useAuthCallback } from "@usehercules/auth/react";
import { useConvexAuth } from "convex/react";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { isAuthenticated } = useConvexAuth();

  const { status, error, retry } = useAuthCallback({
    isBackendAuthenticated: isAuthenticated,
    onSuccess: () => navigate("/", { replace: true }),
    onNoAuthParams: () => navigate("/", { replace: true }),
  });

  if (status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl font-semibold">Authentication failed</h1>
          <p className="text-muted-foreground">{error ?? "Something went wrong during sign-in."}</p>
          <div className="flex items-center justify-center gap-3">
            <Button onClick={() => void retry()}>Try again</Button>
            <Button variant="outline" onClick={() => navigate("/", { replace: true })}>
              Go home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-muted-foreground">Completing sign-in...</p>
      </div>
    </div>
  );
}
