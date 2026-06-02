import React from 'react';
import { 
  FiSearch, 
  FiTrendingUp, 
  FiBarChart2, 
  FiBookmark, 
  FiMousePointer, 
  FiFileText, 
  FiHexagon, 
  FiArrowUpRight 
} from 'react-icons/fi';

export default function FeaturesSection() {
  // Ordered features matching the visual layout of image_2e5880.png
  const features = [
    {
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: <FiSearch className="text-purple-400 text-lg" />
    },
    {
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: <FiTrendingUp className="text-purple-400 text-lg" />
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: <FiBarChart2 className="text-purple-400 text-lg" />
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: <FiBookmark className="text-purple-400 text-lg" />
    },
    {
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process.",
      icon: <FiMousePointer className="text-purple-400 text-lg" />
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: <FiFileText className="text-purple-400 text-lg" />
    },
    {
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: <FiHexagon className="text-purple-400 text-lg" />
    },
    {
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: <FiArrowUpRight className="text-purple-400 text-lg" />
    }
  ];

  return (
    <section className="bg-[#151516] text-white py-16 px-4 md:py-24 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-4">
            <span className="w-1 h-1 bg-indigo-500 rotate-45"></span>
            FEATURES JOB
            <span className="w-1 h-1 bg-indigo-500 rotate-45"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 max-w-xl mx-auto leading-tight">
            Everything you need to succeed
          </h2>
        </div>

        {/* --- Features Grid System --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-12">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-2 rounded-xl hover:bg-zinc-900/20 transition-all duration-200"
            >
              {/* Icon Container with Subtle Ambient Background */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center shadow-md">
                {item.icon}
              </div>

              {/* Text Blocks */}
              <div className="space-y-1">
                <h3 className="text-sm md:text-base font-semibold text-zinc-200 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}