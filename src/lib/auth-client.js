import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

// এখান থেকেই signOut এবং অন্যান্য সব এক্সপোর্ট করতে হবে
export const { signIn, signUp, signOut, useSession } = authClient;