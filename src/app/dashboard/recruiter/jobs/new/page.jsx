import React from 'react';
import CreateJobForm from './CreateJobForm';
import { loginRecruiterCompany } from '@/lib/api/company';

const CreateJobPAge = async () => {
    const company = await loginRecruiterCompany()
  
    return (
        <div>
            <CreateJobForm company={company}/>
        </div>
    );
};

export default CreateJobPAge;