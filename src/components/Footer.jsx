import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 text-gray-400 py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-md"></div>
            <span className="text-white text-xl font-bold">HireSync</span>
          </div>
          <p className="text-sm">Connecting top talent with the best companies seamlessly.</p>
        </div>

        {/* Links Sections */}
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Browse Jobs</Link></li>
            <li><Link href="#" className="hover:text-white">Companies</Link></li>
            <li><Link href="#" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Careers</Link></li>
            <li><Link href="#" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        © {new Date().getFullYear()} HireSync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;