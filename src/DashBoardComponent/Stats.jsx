
import { Card } from '@heroui/react';

export default function Stats({statsData}) {
   
    return (
        <div className="w-full flex m-4">
            {/* Container Layout matching the 4-column structure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-between">
                {statsData.map((stat) => (
                    <Card
                        key={stat.id}
                        type="container"
                        view="filled"
                        className="border-none bg-[#18181b] rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:opacity-90 w-full"
                    >
                        {/* Minimal Square Icon Box */}
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#27272a] self-start">
                            {stat.icon}
                        </div>

                        {/* Typography Stack */}
                        <div className="flex flex-col gap-1 mt-auto">
                            <span className="text-[14px] font-medium text-[#a1a1aa] tracking-wide">
                                {stat.title}
                            </span>
                            <span className="text-3xl font-semibold text-white tracking-tight">
                                {stat.value}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}