import { CreditCard, LogoFacebook } from "@gravity-ui/icons";
import { BiLogoGoogle } from "react-icons/bi";
import { FaBolt } from "react-icons/fa6";


const companies = [
  {
    id: 1,
    name: "Google Inc.",
    category: "Technology",
    location: "Mountain View",
    jobs: 24,
    icon: BiLogoGoogle,
  },
  {
    id: 2,
    name: "Meta Platforms",
    category: "Social Media",
    location: "Menlo Park",
    jobs: 18,
    icon: LogoFacebook,
  },
  {
    id: 3,
    name: "Stripe",
    category: "Fintech",
    location: "San Francisco",
    jobs: 12,
    icon: CreditCard,
  },
  {
    id: 4,
    name: "Tesla",
    category: "Automotive",
    location: "Austin",
    jobs: 31,
    icon: FaBolt,
  },
];

export default function TopCompanies() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[#2a2a2a]  p-5 ">
      <div className="space-y-5">
        {companies.map((company) => {
          const Icon = company.icon;

          return (
            <div
              key={company.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#262626]">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {company.name}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    {company.category} • {company.location}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">
                  {company.jobs}
                </p>

                <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                  Active Jobs
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-8 w-full rounded-xl border border-[#2a2a2a] py-3 text-sm font-medium transition hover:bg-[#1a1a1a]">
        View All Companies
      </button>
    </div>
  );
}