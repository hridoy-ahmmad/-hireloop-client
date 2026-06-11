import { SideBar } from '@/DashBoardComponent/SideBar';
import React from 'react';

const page = () => {
    return (
        <div className='flex container mx-auto min-h-screen'>
            <SideBar /> 
            <h1>This is recruiter</h1>
        </div>
    );
};

export default page;