import React from 'react';
import { Upload, X } from 'lucide-react';

const RegisterCompanyModal = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl w-full max-w-lg overflow-hidden text-gray-300">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-white">Register New Company</h2>
            <p className="text-sm text-gray-400 mt-1">Enter your business details to start hiring on HireLoop.</p>
          </div>
          <button className="text-gray-400 hover:text-white"><X size={20} /></button>
        </div>

        {/* Form Fields */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Company Name</label>
              <input type="text" placeholder="e.g. Acme Corp" className="w-full bg-black/30 border border-gray-700 rounded-lg p-2.5 outline-none focus:border-gray-500" />
            </div>
            <div>
              <label className="block text-sm mb-2">Industry / Category</label>
              <select className="w-full bg-black/30 border border-gray-700 rounded-lg p-2.5 outline-none">
                <option>Technology</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Website URL</label>
              <div className="flex bg-black/30 border border-gray-700 rounded-lg overflow-hidden">
                <span className="px-3 py-2.5 text-gray-500 border-r border-gray-700 text-sm">https://</span>
                <input type="text" placeholder="www.company.com" className="w-full bg-transparent p-2.5 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Location</label>
              <input type="text" placeholder="City, Country" className="w-full bg-black/30 border border-gray-700 rounded-lg p-2.5 outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Employee Count Range</label>
              <select className="w-full bg-black/30 border border-gray-700 rounded-lg p-2.5 outline-none">
                <option>1-10 employees</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Company Logo</label>
              <div className="border border-dashed border-gray-700 rounded-lg p-2 flex items-center gap-3 cursor-pointer hover:bg-white/5">
                <div className="bg-gray-800 p-2 rounded"><Upload size={16} /></div>
                <div>
                  <p className="text-xs text-white">Upload image</p>
                  <p className="text-[10px] text-gray-500">PNG, JPG up to 5MB</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Brief Description</label>
            <textarea className="w-full bg-black/30 border border-gray-700 rounded-lg p-3 h-24 outline-none" placeholder="Tell us about your company's mission and culture..." />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800 flex justify-end gap-3">
          <button className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition">Cancel</button>
          <button className="px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">Register Company</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompanyModal;