import { ConvexProviderWithHerculesAuth } from "@usehercules/auth/convex-react";
import { HerculesAuthProvider } from "@usehercules/auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConvexReactClient } from "convex/react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

const convexUrl = import.meta.env.VITE_CONVEX_URL ?? "https://placeholder.convex.cloud";
const oidcAuthority = import.meta.env.VITE_HERCULES_OIDC_AUTHORITY ?? "https://placeholder.auth.local";
const oidcClientId = import.meta.env.VITE_HERCULES_OIDC_CLIENT_ID ?? "placeholder-client-id";

const convex = new ConvexReactClient(convexUrl);
const queryClient = new QueryClient();

export function DefaultProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <HerculesAuthProvider authority={oidcAuthority} client_id={oidcClientId}>
          <ConvexProviderWithHerculesAuth client={convex}>
            {children}
            <Toaster richColors closeButton />
          </ConvexProviderWithHerculesAuth>
        </HerculesAuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
