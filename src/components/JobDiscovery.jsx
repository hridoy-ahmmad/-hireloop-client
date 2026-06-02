import React from 'react';
import { FiMapPin, FiBriefcase, FiDollarSign, FiArrowUpRight } from 'react-icons/fi';

export default function JobDiscovery() {
    // Mock data for the 6 visible cards based on image_2ec45c.png
    const jobs = Array(6).fill({
        title: "Frontend Developer",
        description: "Showcase your commitment to diversity and inclusion by highlighting initiatives.",
        location: "New York, USA",
        type: "Hybrid",
        salary: "$85k-$135k/year"
    });

    return (
        <section className="bg-black text-white py-16 px-4 md:py-24 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-6xl w-full mx-auto">

                {/* --- Header Section --- */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-950/40 border border-indigo-900/50 px-3 py-1 rounded-full inline-block mb-4">
                        Smart Job Discovery
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 max-w-2xl mx-auto leading-tight">
                        The roles youd never find by searching
                    </h2>
                </div>

                {/* --- Responsive Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#121214] border border-zinc-900 rounded-2xl p-6 transition-all duration-300 hover:bg-[#161619] hover:border-zinc-800 flex flex-col justify-between"
                        >
                            <div>
                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors duration-200">
                                    {job.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-xs md:text-sm text-zinc-400 leading-relaxed min-h-[40px]">
                                    {job.description}
                                </p>

                                {/* Badges/Tags Container */}
                                <div className="mt-6 flex flex-wrap gap-2 text-[11px] md:text-xs font-medium">
                                    {/* Location Tag */}
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/60 text-zinc-400 border border-zinc-800/40">
                                        <FiMapPin className="text-purple-400 text-xs shrink-0" />
                                        <span>{job.location}</span>
                                    </div>

                                    {/* Type Tag */}
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/60 text-zinc-400 border border-zinc-800/40">
                                        <FiBriefcase className="text-purple-400 text-xs shrink-0" />
                                        <span>{job.type}</span>
                                    </div>

                                    {/* Salary Tag */}
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/60 text-zinc-400 border border-zinc-800/40 w-full sm:w-auto">
                                        <FiDollarSign className="text-purple-400 text-xs shrink-0" />
                                        <span>{job.salary}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="mt-8 pt-4 border-t border-zinc-900/60">
                                <button className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-medium transition-colors duration-200 group/btn">
                                    <span>Apply Now</span>
                                    <FiArrowUpRight className="text-sm transition-transform duration-200 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* --- Bottom CTA Button --- */}
                <div className="mt-12 md:mt-16 text-center">
                    <button className="px-6 py-3 bg-white text-black font-semibold text-xs md:text-sm rounded-xl hover:bg-zinc-200 active:scale-98 transition-all duration-200 shadow-xl shadow-white/5">
                        View all job open
                    </button>
                </div>

            </div>
        </section>
    );
}