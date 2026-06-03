'use client';
import StartCard from '@/components/dashboard/StartCard';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const RecruiterDashboard = () => {
    const { data : session , isPending } =useSession();
    if (isPending) {
        return <div>Loading...</div>;
    }

    const user = session?.user;
    return (
        <div>
            <h2 className="text-2xl font-bold text-white">Welcome, {user?.name}</h2>
            <StartCard />
        </div>
    );
};

export default RecruiterDashboard;