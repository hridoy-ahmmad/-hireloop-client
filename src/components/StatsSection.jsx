// components/StatsSection.jsx

import {
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
  HiOutlineUsers,
  HiOutlineStar,
} from "react-icons/hi2";

const stats = [
  {
    id: 1,
    icon: <HiOutlineBriefcase size={18} />,
    number: "50K",
    label: "Active Jobs",
  },
  {
    id: 2,
    icon: <HiOutlineBuildingOffice2 size={18} />,
    number: "12K",
    label: "Companies",
  },
  {
    id: 3,
    icon: <HiOutlineUsers size={18} />,
    number: "2M",
    label: "Job Seekers",
  },
  {
    id: 4,
    icon: <HiOutlineStar size={18} />,
    number: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="relative w-full  overflow-hidden bg-black flex md:min-h-100 justify-center items-end px-4 py-5 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: "url('images/globe.png')", // your image path
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Glow Effect */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-600/40 blur-[140px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-white text-2xl md:text-4xl font-semibold leading-relaxed">
            Assisting over 15,000 job seekers <br />
            find their dream positions.
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.4)]"
            >
              <div className="text-white/80 mb-5">{item.icon}</div>

              <h3 className="text-white text-3xl font-semibold mb-1">
                {item.number}
              </h3>

              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}