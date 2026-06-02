import React from 'react';

export default function CtaSection() {
    return (
        <section className="bg-black text-white w-full py-16 px-4 md:py-28 overflow-hidden flex items-center justify-center">

            {/* --- Main Container with Custom Grid Background Image --- */}
            <div
                className="relative w-full max-w-6xl aspect-[1.5/1] sm:aspect-[1.8/1] md:aspect-[2.3/1] bg-zinc-950/40 bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center px-6 text-center shadow-[0_0_50px_rgba(79,70,229,0.05)]"
                style={{
                    backgroundImage: "url('/images/cta-bg.png')"
                }}
            >

                {/* Ambient Top Lighting Blur Layer to catch the upper rim illumination */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-500/10 blur-[100px] pointer-events-none z-0"></div>

                {/* --- Text & Action Content Blocks --- */}
                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                        Your next role is<br className="sm:hidden" /> already looking for you
                    </h2>

                    <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-medium max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                        Build a profile in three minutes. The matches start arriving tomorrow morning.
                    </p>

                    {/* --- Responsive Button Layout --- */}
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3">

                        {/* Primary Action Button */}
                        <button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold text-xs md:text-sm rounded-xl hover:bg-zinc-200 active:scale-98 transition-all duration-200 shadow-xl shadow-white/5">
                            Create a free account
                        </button>

                        {/* Secondary Action Button */}
                        <button className="w-full sm:w-auto px-6 py-3 bg-zinc-950/60 border border-zinc-800 text-zinc-300 font-semibold text-xs md:text-sm rounded-xl hover:bg-zinc-900 hover:text-white active:scale-98 transition-all duration-200 backdrop-blur-sm">
                            View pricing
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}