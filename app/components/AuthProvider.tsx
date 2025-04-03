"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export function StoreUserInLocalStorage() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      localStorage.setItem("user", JSON.stringify(session.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [session]);

  return null;
}
