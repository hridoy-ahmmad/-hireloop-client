import Image from "next/image";

export function CompanyCard({ company }) {
    const isApproved = company.status === 'APPROVED';

console.log(company);

    return (
        <div className="bg-[#1c1c1e] border border-[#2c2c2e] rounded-2xl p-6 flex flex-col justify-between hover:border-gray-700 transition-colors duration-200">
            <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                        {/* Company Logo Wrapper */}
                        <div >
                            {/* Replace with <Image src={...} /> or SVG as needed */}
                            <Image alt={company.companyName} src= {company.logoUrl} height={48} width={48}/>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white leading-tight">
                                {company.companyName}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium mt-0.5">
                                {company.industry}
                            </p>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <span
                        className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase border ${isApproved
                            ? 'bg-[#14291c] text-[#4ade80] border-[#1e462d]'
                            : 'bg-[#2a1e12] text-[#f59e0b] border-[#453016]'
                            }`}
                    >
                        {company.status}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {company.description}
                </p>
            </div>

            {/* Metadata & Footer Links */}
            <div className="space-y-4 pt-4 border-t border-[#2c2c2e]/50">
                <div className="flex items-center justify-between text-xs text-gray-400">
                    {/* Location */}
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{company.location}</span>
                    </div>

                    {/* Team Size */}
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{company.employeeCount}</span>
                    </div>
                </div>

                {/* Website Action */}
                <a
                    href={company.websiteUrl}
                    className="inline-flex items-center gap-1.5 text-xs text-white font-medium hover:underline w-fit pt-1"
                >
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.26 9.26a5 5 0 000 7.08" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.49 15.49a5 5 0 000-7.08" />
                    </svg>
                    Visit Website
                </a>
            </div>
        </div>
    );
}