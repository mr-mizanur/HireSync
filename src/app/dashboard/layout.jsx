import { DashboardSideBar } from '@/components/dashboard/DashboardSideBar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-[#0a0a0a]">
           
            <div className="p-4">
                <DashboardSideBar />
            </div>
            
           
            <main className="flex-1 p-6 text-white">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
