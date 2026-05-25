"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useSession, signOut } from "@/lib/auth-client"; // আপনার auth-client ফাইল থেকে ইমপোর্ট করুন

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession(); // সেশন ডেটা নেওয়া হচ্ছে

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-[#0a0a0a] relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-md"></div>
        <span className="text-white text-xl font-bold">HireSync</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 bg-[#1a1a1a] px-6 py-3 rounded-full">
        <Link href="/" className="text-gray-300 hover:text-white">Browse Jobs</Link>
        <Link href="/" className="text-gray-300 hover:text-white">Company</Link>
        <Link href="/" className="text-gray-300 hover:text-white">Pricing</Link>
      </div>

      {/* Auth Section */}
      <div className="hidden md:flex items-center gap-4">
        {session ? (
          <>
            <span className="text-white font-medium">Hi, {session.user.name}</span>
            <button 
              onClick={() => signOut()} 
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/sign-in" className="text-indigo-400 font-medium">Sign In</Link>
            <Link href="/sign-up" className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
              Get Started
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] flex flex-col items-center gap-6 py-8 md:hidden z-50">
          <Link href="/" className="text-gray-300">Browse Jobs</Link>
          <Link href="/" className="text-gray-300">Company</Link>
          <Link href="/" className="text-gray-300">Pricing</Link>
          {session ? (
            <button onClick={() => signOut()} className="text-red-400">Logout</button>
          ) : (
            <>
              <Link href="/sign-in" className="text-indigo-400">Sign In</Link>
              <Link href="/sign-up" className="bg-white text-black px-6 py-2 rounded-lg">Get Started</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;