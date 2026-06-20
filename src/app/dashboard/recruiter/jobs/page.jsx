import React from 'react';
import CompanyJobsForm from './CompanyJobsTable';
import { loginRecruiterCompany } from '@/lib/api/company';

const companyJobsPage =async () => {
 const company = await loginRecruiterCompany()
 console.log(company);
 
    return (
        <div>
            <CompanyJobsForm reqruiterCompany = {company}/>
        </div>
    );
};

export default companyJobsPage;