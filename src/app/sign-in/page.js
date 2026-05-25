"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await signIn.email({
      email,
      password,
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>
        <input className="w-full p-3 mb-4 bg-black rounded-lg text-white" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-3 mb-6 bg-black rounded-lg text-white" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignIn} className="w-full bg-white text-black py-3 rounded-lg font-bold">Sign In</button>
      </div>
    </div>
  );
}