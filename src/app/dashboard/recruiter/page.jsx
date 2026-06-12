"use client"
import DashBoardTable from '@/DashBoardComponent/DashBoardTable';
import Stats from '@/DashBoardComponent/Stats';
import TopCompanies from '@/DashBoardComponent/TopCompanies';
import { useSession } from '@/lib/auth-client';
import { CircleCheck, FileText, Persons, Thunderbolt } from '@gravity-ui/icons';
import React from 'react';

const RecruiterHomePage = () => {
    const { data: session } = useSession()
    const user = session?.user
    const statsData = [
        {
            id: 1,
            title: "Total Job Posts",
            value: "48",
            icon: <FileText width={20} height={20} className="text-[#a1a1aa]" />,
        },
        {
            id: 2,
            title: "Total Applicants",
            value: "1,284",
            icon: <Persons width={20} height={20} className="text-[#a1a1aa]" />,
        },
        {
            id: 3,
            title: "Active Jobs",
            value: "18",
            icon: <Thunderbolt width={20} height={20} className="text-[#a1a1aa]" />,
        },
        {
            id: 4,
            title: "Jobs Closed",
            value: "32",
            icon: <CircleCheck width={20} height={20} className="text-[#a1a1aa]" />,
        },
    ];
    return (
        <div >
            <h1>Welcome back,  {user?.name}!</h1>
            <div className='w-full'>
                <Stats statsData={statsData} />
                {/* ------------- */}
                <div className='md:flex justify-between gap-2 '>
                    {/* recent applications */}
                    <div className='flex-2'>
                        <div className='flex justify-between text-gray-300 my-2'>
                            <h1 className='text-xl'>Recent Applications</h1>
                            <p>View All</p>
                        </div>
                        <DashBoardTable />
                    </div>
                    {/* Top companies */}
                    <div className='w-full md:flex-1 '>
                        <div className='flex justify-between text-gray-300 my-2'>
                            <h1 className='text-xl'>My Top Companies</h1>
                            <p>View All</p>
                        </div>
                        <TopCompanies />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecruiterHomePage;