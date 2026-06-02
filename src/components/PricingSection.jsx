'use client';

import React, { useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { FaCrown, FaChartBar } from 'react-icons/fa6';
import { AiFillThunderbolt } from 'react-icons/ai';

export default function PricingSection() {
    const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'yearly'

    // Pricing plans structure matching image_2e5fdf.png
    const plans = [
        {
            name: "Starter",
            icon: <FaCrown className="text-pink-400 text-sm" />,
            basePrice: 0,
            description: "Start building your insights hub:",
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ],
            isPopular: false,
        },
        {
            name: "Growth",
            icon: <FaChartBar className="text-purple-400 text-sm" />,
            basePrice: 17,
            description: "Start building your insights hub:",
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ],
            isPopular: true, // Highlights white main action button
        },
        {
            name: "Premium",
            icon: <AiFillThunderbolt className="text-indigo-400 text-sm" />,
            basePrice: 99,
            description: "Start building your insights hub:",
            features: [
                "Everything in Pro",
                "Multi-profile career portfolios",
                "Shared talent rooms",
                "Recruiter view (read-only)"
            ],
            isPopular: false,
        }
    ];

    // Apply a 25% discount if yearly billing is selected
    const calculatePrice = (basePrice) => {
        if (basePrice === 0) return 0;
        if (billingPeriod === 'yearly') {
            return Math.floor(basePrice * 12 * 0.75); // 25% Off total
        }
        return basePrice;
    };

    return (
        <section className="bg-black text-white py-16 px-4 md:py-24 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center font-sans">
            <div className="max-w-6xl w-full mx-auto">

                {/* --- Header Section --- */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-4">
                        <span className="w-1 h-1 bg-indigo-500 rotate-45"></span>
                        Pricing
                        <span className="w-1 h-1 bg-indigo-500 rotate-45"></span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 max-w-2xl mx-auto leading-tight">
                        Pay for the leverage,<br />not the listings
                    </h2>
                </div>

                {/* --- Functional Toggle Button --- */}
                <div className="flex justify-center mb-12 md:mb-16">
                    <div className="relative p-1 bg-zinc-900/90 border border-zinc-800/80 rounded-full flex items-center shadow-inner">
                        {/* Monthly Button */}
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${billingPeriod === 'monthly' ? 'bg-white text-black' : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            Monthly
                        </button>

                        {/* Yearly Button + Discount Badge */}
                        <button
                            onClick={() => setBillingPeriod('yearly')}
                            className={`relative z-10 pl-4 pr-2 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${billingPeriod === 'yearly' ? 'bg-white text-black' : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            <span>Yearly</span>
                            <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded-full ${billingPeriod === 'yearly' ? 'bg-pink-600 text-white' : 'bg-pink-500/20 text-pink-400'
                                }`}>
                                25%
                            </span>
                        </button>
                    </div>
                </div>

                {/* --- Pricing Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {plans.map((plan, index) => {
                        const displayPrice = calculatePrice(plan.basePrice);

                        return (
                            <div
                                key={index}
                                className={`relative rounded-2xl p-6 md:p-8 flex flex-col justify-between border transition-all duration-300 ${plan.isPopular
                                        ? 'bg-zinc-900/40 border-zinc-800 shadow-2xl shadow-indigo-500/5'
                                        : 'bg-zinc-950/20 border-zinc-900'
                                    }`}
                            >
                                <div>
                                    {/* Card Title & Icon Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/40">
                                                {plan.icon}
                                            </div>
                                            <h3 className="text-base md:text-lg font-semibold text-zinc-200">{plan.name}</h3>
                                        </div>

                                        {/* Price Breakdown */}
                                        <div className="text-right flex items-baseline gap-1">
                                            <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">${displayPrice}</span>
                                            <span className="text-[10px] md:text-xs text-zinc-500 font-medium">
                                                /{billingPeriod === 'monthly' ? 'month' : 'year'}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-xs md:text-sm text-zinc-400 font-medium mb-4">{plan.description}</p>

                                    {/* Feature Checklist */}
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-zinc-400">
                                                <span className="p-0.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-500 shrink-0 mt-0.5">
                                                    <FiPlus className="text-xs" />
                                                </span>
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Card Call to Action Button */}
                                <button
                                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 ${plan.isPopular
                                            ? 'bg-white text-black hover:bg-zinc-200 shadow-xl shadow-white/5'
                                            : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800/60'
                                        }`}
                                >
                                    <span>Choose This Plan</span>
                                    <FiArrowRight className="text-sm shrink-0" />
                                </button>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}