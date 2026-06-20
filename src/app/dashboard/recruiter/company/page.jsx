import React from 'react';
import MyCompanies from './MyCompanies';
import { getUser } from '@/lib/core/session';

const compmayPage = async() => {
    const user =await getUser()
    console.log(user);
    
    return (
        <div>
            <MyCompanies user={user} />
        </div>
    );
};

export default compmayPage;