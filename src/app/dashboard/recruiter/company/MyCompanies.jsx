import { CompanyCard } from '@/DashBoardComponent/CompanyCard';
import { RegisterCompany } from '@/DashBoardComponent/RegisterCompany';
import { getRecruiterCompany } from '@/lib/api/company';

export default async function MyCompanies({ user }) {
    const myCompanies =await getRecruiterCompany(user.id)
    console.log(myCompanies);
    

    return (
        <div className="min-h-screen bg-[#121212] text-gray-300 font-sans p-8 md:p-12">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                            My Companies
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">
                            Manage your registered companies and their verification states.
                        </p>
                    </div>


                    <RegisterCompany user={user} />

                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myCompanies.map((company) => (
                        <CompanyCard key={company._id} company={company} />
                    ))}
                </div>

            </div>
        </div>
    );
}


