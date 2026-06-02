//
//"use client";
//import { useState } from "react";
//import { useRouter } from "next/navigation";
//import { signUp } from "@/lib/auth-client";
//import {Description, Label, Radio, RadioGroup} from "@heroui/react";
//
//export default function SignUp() {
//  const [email, setEmail] = useState("");
//  const [password, setPassword] = useState("");
//  const [name, setName] = useState("");
//  const [error, setError] = useState("");
//  const router = useRouter();
//
//  const handleSignUp = async () => {
//    setError("");
//    const { error: err } = await signUp.email({ email, password, name });
//    if (err) {
//      setError(err.message || "Sign up failed");
//    } else {
//      router.push("/");
//    }
//  };
//
//  return (
//    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
//      <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 w-full max-w-md">
//        <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
//        <input className="w-full p-3 mb-4 bg-black rounded-lg text-white" placeholder="Name" onChange={(e) => setName(e.target.value)} />
//        <input className="w-full p-3 mb-4 bg-black rounded-lg text-white" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//        <input className="w-full p-3 mb-6 bg-black rounded-lg text-white" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//
//
//
//
//        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
//        <button onClick={handleSignUp} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold">Sign Up</button>
//      </div>
//    </div>
//  );
//
//
//}


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("job-seeker"); // ডিফল্ট ভ্যালু
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    setError("");
    
    // কনসোল লগ দিয়ে চেক করুন স্টেট কাজ করছে কিনা
    console.log("Submitting with role:", role); 

    const { error: err } = await signUp.email({ 
      email, 
      password, 
      name, 
      role // এখানে স্টেট থেকে ভ্যালু যাচ্ছে
    });

    if (err) {
      setError(err.message || "Sign up failed");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
      <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
        
        <input 
          className="w-full p-3 mb-4 bg-black rounded-lg text-white border border-gray-700 focus:border-indigo-500 outline-none transition" 
          placeholder="Name" 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          className="w-full p-3 mb-4 bg-black rounded-lg text-white border border-gray-700 focus:border-indigo-500 outline-none transition" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          className="w-full p-3 mb-6 bg-black rounded-lg text-white border border-gray-700 focus:border-indigo-500 outline-none transition" 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
        />

        {/* Role Selection */}
        <div className="mb-6">
          <p className="text-gray-400 mb-3 text-sm">I am a...</p>
          <div className="grid grid-cols-2 gap-3 p-1 bg-black rounded-xl border border-gray-800">
            <button
              type="button" // এটি খুব গুরুত্বপূর্ণ
              onClick={() => setRole("job-seeker")}
              className={`py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                role === "job-seeker" 
                  ? "bg-indigo-600 text-white shadow-lg" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Job Seeker
            </button>
            <button
              type="button" // এটি খুব গুরুত্বপূর্ণ
              onClick={() => setRole("recruiter")}
              className={`py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                role === "recruiter" 
                  ? "bg-indigo-600 text-white shadow-lg" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Recruiter
            </button>
          </div>
        </div>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        
        <button 
          onClick={handleSignUp} 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold transition-colors"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}