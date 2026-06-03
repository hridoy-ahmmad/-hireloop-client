"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Browse Jobs", href: "/jobs" },
        { label: "Company", href: "/company" },
        { label: "Pricing", href: "/pricing" },
    ];

    return (
        <header className=" z-30 w-full px-4 py-3 bg-black/90">
            <nav className="mx-auto max-w-7xl rounded-2xl bg-black/90 text-white">
                <div className="flex h-18.5 items-center justify-between px-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                   
                        logo
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-5 md:flex">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-[18px] py-2 px-3 hover:bg-gray-800 text-gray-200 transition hover:text-white rounded-lg"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Desktop Actions */}
                        <div className="h-5 w-px bg-gray-500" />
                        <div className="hidden  items-center gap-8 md:flex">
                            <Link
                                href="/login"
                                className="text-[18px] font-medium text-[#7B6DFF] hover:opacity-90"
                            >
                                Sign In
                            </Link>

                            <Button
                                className="h-12  rounded-xl bg-[#6C63FF] px-7 text-base font-semibold text-white"
                            >
                                <Link href={'/signup'}>
                                    Get Started
                                </Link>
                            </Button>
                        </div>
                    </div>




                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? (
                            <Xmark width={24} height={24} />
                        ) : (
                            <Bars width={24} height={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="border-t border-gray-700 md:hidden">
                        <div className="flex flex-col gap-5 p-6">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-200"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link
                                href="/login"
                                className="font-medium text-[#7B6DFF]"
                            >
                                Sign In
                            </Link>

                            <Button className="w-full rounded-xl bg-[#6C63FF] text-white">
                                <Link href={'/signup'}>
                                    Get Started
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}