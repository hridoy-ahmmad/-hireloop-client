import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const Hero = () => {
    return (
        <div className='w-full bg-[#030303] text-white '>
            {/* --- Top Badge & Header --- */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-sm text-xs text-zinc-400 mb-6 tracking-wide shadow-inner">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <strong className="text-zinc-200">50,000+</strong> NEW JOBS THIS MONTH
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                    Find Your Dream Job Today
                </h1>

                <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
                    HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
                </p>

                {/* --- Search Bar Container --- */}
                <div className="w-full max-w-3xl mt-10 p-2 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md shadow-2xl flex flex-col md:flex-row gap-2 items-center">
                    {/* Job Input */}
                    <div className="relative w-full flex items-center px-3 py-2 md:py-1">
                        <FiSearch className="text-zinc-500 text-lg shrink-0 mr-3" />
                        <input
                            type="text"
                            placeholder="Job title, skill or company"
                            className="w-full bg-transparent text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none"
                        />
                    </div>

                    {/* Divider Line for Desktop */}
                    <div className="hidden md:block h-6 w-[1px] bg-zinc-800"></div>

                    {/* Location Input */}
                    <div className="relative w-full flex items-center px-3 py-2 md:py-1 border-t border-zinc-800/50 md:border-t-0">
                        <FiMapPin className="text-zinc-500 text-lg shrink-0 mr-3" />
                        <input
                            type="text"
                            placeholder="Location or Remote"
                            className="w-full bg-transparent text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none"
                        />
                    </div>

                    {/* Search Button */}
                    <button className="w-full md:w-auto p-3.5 bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white rounded-xl transition-all duration-200 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/20">
                        <HiMagnifyingGlass className="text-xl" />
                    </button>
                </div>

                {/* --- Trending Keywords --- */}
                <div className="mt-5 flex flex-wrap justify-center items-center gap-2 text-xs text-zinc-500">
                    <span>Trending Position:</span>
                    {['Product Designer', 'AI Engineering', 'Devops Engineer'].map((tag) => (
                        <button key={tag} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800/60 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors">
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;